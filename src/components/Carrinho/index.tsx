import Botoes from '../Botoes'
import * as S from './styles'

import excluir from '../../assets/images/lixeira.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { fechado, remover } from '../../store/reducers/carrinho'
import { formataPreco } from '../PerfilTemplate'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'

const Carrinho = () => {
  const { estaAberto, itens } = useSelector(
    (state: RootReducer) => state.carrinho
  )

  const [purchase, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      nomeCompleto: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      nomeNoCartao: '',
      numeroNoCartao: '',
      codigoDeSeguranca: '',
      mesVencimento: '',
      anoVencimento: ''
    },
    validationSchema: Yup.object({
      nomeCompleto: Yup.string()
        .min(5, 'Nome incompleto.')
        .required('Campo obrigatório.'),
      endereco: Yup.string()
        .min(5, 'Insira um endereço válido.')
        .required('Campo obrigatório.'),
      cidade: Yup.string()
        .min(5, 'Insira uma cidade válido.')
        .required('Campo obrigatório.'),
      cep: Yup.string()
        .min(9, 'Insira um CEP válido.')
        .required('Campo obrigatório.'),
      numero: Yup.string()
        .min(2, 'Insira um número válido (ex: 01).')
        .required('Campo obrigatório.'),
      complemento: Yup.string().min(5, ''),

      nomeNoCartao: Yup.string()
        .min(5, 'Nome incompleto.')
        .required('Campo obrigatório.'),
      numeroNoCartao: Yup.string()
        .min(13, 'Insira um número válido')
        .required('Campo obrigatório.'),
      codigoDeSeguranca: Yup.string()
        .min(3, 'Insira um número válido.')
        .required('Campo obrigatório.'),
      mesVencimento: Yup.string()
        .min(2, 'Insira um mês válido.')
        .required('Campo obrigatório.'),
      anoVencimento: Yup.string()
        .min(4, 'Insira um ano válido (ex: 2024).')
        .required('Campo obrigatório.')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.nomeCompleto,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numero),
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.nomeNoCartao,
            number: values.numeroNoCartao,
            code: Number(values.codigoDeSeguranca),
            expires: {
              month: Number(values.mesVencimento),
              year: Number(values.anoVencimento)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getMensagemDeErro = (fieldName: string, mensagem?: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors

    if (estaAlterado && estaInvalido) return mensagem
    return ''
  }

  const dispatch = useDispatch()

  const [etapa, setEtapa] = useState('pedido')
  const fechaCarrinho = () => {
    dispatch(fechado())
  }

  const getPrecoTotal = () => {
    return itens.reduce((acumulador, valorAtual) => {
      if (valorAtual.preco) {
        return (acumulador += valorAtual.preco)
      }
      return 0
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remover(id))
  }

  const continuarComEntrega = () => {
    setEtapa('entrega')
  }

  const continuarComPagamento = () => {
    setEtapa('pagamento')
  }

  const voltarParaCarrinho = () => {
    setEtapa('pedido')
  }

  const voltarParaEndereco = () => {
    setEtapa('entrega')
  }

  const continuarParaMensagem = () => {
    setEtapa('mensagem')
  }

  return (
    <form onSubmit={form.handleSubmit}>
      {etapa === 'pedido' && (
        <S.CarrinhoContainer className={estaAberto ? 'aberto' : ''}>
          <S.Overlay onClick={fechaCarrinho} />
          <S.BarraLateral>
            {itens.map((item) => (
              <S.PedidoContainer key={item.id}>
                <S.PedidoInfos>
                  <img className="imgPedido" src={item.foto} alt="" />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{formataPreco(item.preco)}</p>
                  </div>
                  <img
                    onClick={() => removeItem(item.id)}
                    className="excluirItem"
                    src={excluir}
                    alt="Botão de exclusão do item"
                  />
                </S.PedidoInfos>
              </S.PedidoContainer>
            ))}
            <S.TotalPedido>
              <p>Valor total</p>
              <p>{formataPreco(getPrecoTotal())}</p>
            </S.TotalPedido>
            <Botoes
              titulo="Clique aqui para continuar com seu pedido"
              tipo="botao"
              onClick={continuarComEntrega}
            >
              Continuar com a entrega
            </Botoes>
          </S.BarraLateral>
        </S.CarrinhoContainer>
      )}
      {etapa === 'entrega' && (
        <S.CarrinhoContainer className={estaAberto ? 'aberto' : ''}>
          <S.Overlay onClick={fechaCarrinho} />
          <S.BarraLateral>
            <h4>Entrega</h4>
            <div>
              <S.EntregaInput>
                <label htmlFor="nomeCompleto">Quem irá receber</label>
                <input
                  id="nomeCompleto"
                  type="text"
                  name="nomeCompleto"
                  value={form.values.nomeCompleto}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getMensagemDeErro('nomeCompleto', form.errors.nomeCompleto)}
                </small>
              </S.EntregaInput>
              <S.EntregaInput>
                <label htmlFor="endereco">Endereço</label>
                <input
                  id="endereco"
                  type="text"
                  name="endereco"
                  value={form.values.endereco}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getMensagemDeErro('endereco', form.errors.endereco)}
                </small>
              </S.EntregaInput>
              <S.EntregaInput>
                <label htmlFor="cidade">Cidade</label>
                <input
                  id="cidade"
                  type="text"
                  name="cidade"
                  value={form.values.cidade}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getMensagemDeErro('cidade', form.errors.cidade)}</small>
              </S.EntregaInput>
              <S.InfosContainer>
                <S.EntregaInput>
                  <label htmlFor="cep">CEP</label>
                  <input
                    id="cep"
                    type="text"
                    name="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getMensagemDeErro('cep', form.errors.cep)}</small>
                </S.EntregaInput>
                <S.EntregaInput>
                  <label htmlFor="numero">Número</label>
                  <input
                    id="numero"
                    type="text"
                    name="numero"
                    value={form.values.numero}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getMensagemDeErro('numero', form.errors.numero)}
                  </small>
                </S.EntregaInput>
              </S.InfosContainer>
              <S.EntregaInput>
                <label htmlFor="complemento">Complemento (opcional)</label>
                <input
                  id="complemento"
                  type="text"
                  name="complemento"
                  value={form.values.complemento}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getMensagemDeErro('complemento', form.errors.complemento)}
                </small>
              </S.EntregaInput>
              <S.BotoesContainer>
                <Botoes
                  titulo="Clique aqui para continuar com seu pedido"
                  tipo="botao"
                  onClick={continuarComPagamento}
                >
                  Continuar com o pagamento
                </Botoes>
                <Botoes
                  titulo="Clique aqui para continuar com seu pedido"
                  tipo="botao"
                  onClick={voltarParaCarrinho}
                >
                  Voltar para o carrinho
                </Botoes>
              </S.BotoesContainer>
            </div>
          </S.BarraLateral>
        </S.CarrinhoContainer>
      )}
      {etapa === 'pagamento' && (
        <S.CarrinhoContainer className={estaAberto ? 'aberto' : ''}>
          <S.Overlay onClick={fechaCarrinho} />
          <S.BarraLateral>
            <h4>Pagamento - Valor a pagar R$ 190,90</h4>
            <div>
              <S.EntregaInput>
                <label htmlFor="nomeNoCartao">Nome no cartão</label>
                <input
                  id="nomeNoCartao"
                  type="text"
                  name="nomeNoCartao"
                  value={form.values.nomeNoCartao}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getMensagemDeErro('nomeNoCartao', form.errors.nomeNoCartao)}
                </small>
              </S.EntregaInput>
              <S.NumeroCvv>
                <S.EntregaInput>
                  <label htmlFor="numeroNoCartao">Número do cartão</label>
                  <input
                    id="numeroNoCartao"
                    type="text"
                    className="numeroNoCartao"
                    name="numeroNoCartao"
                    value={form.values.numeroNoCartao}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getMensagemDeErro(
                      'numeroNoCartao',
                      form.errors.numeroNoCartao
                    )}
                  </small>
                </S.EntregaInput>
                <S.EntregaInput>
                  <label htmlFor="codigoDeSeguranca">CVV</label>
                  <input
                    id="codigoDeSeguranca"
                    type="text"
                    className="cvv"
                    name="codigoDeSeguranca"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.codigoDeSeguranca}
                  />
                  <small>
                    {getMensagemDeErro(
                      'codigoDeSeguranca',
                      form.errors.codigoDeSeguranca
                    )}
                  </small>
                </S.EntregaInput>
              </S.NumeroCvv>
              <S.InfosContainer>
                <S.EntregaInput>
                  <label htmlFor="mesVencimento">Mês de vencimento</label>
                  <input
                    id="mesVencimento"
                    type="text"
                    name="mesVencimento"
                    value={form.values.mesVencimento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getMensagemDeErro(
                      'mesVencimento',
                      form.errors.mesVencimento
                    )}
                  </small>
                </S.EntregaInput>
                <S.EntregaInput>
                  <label htmlFor="anoVencimento">Ano de vencimento</label>
                  <input
                    id="anoVencimento"
                    type="text"
                    name="anoVencimento"
                    value={form.values.anoVencimento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getMensagemDeErro(
                      'anoVencimento',
                      form.errors.anoVencimento
                    )}
                  </small>
                </S.EntregaInput>
              </S.InfosContainer>
              <S.BotoesContainer>
                <Botoes
                  titulo="Clique aqui para continuar com seu pedido"
                  tipo="botao"
                  onClick={continuarParaMensagem}
                >
                  Finalizar pagamento
                </Botoes>
                <Botoes
                  titulo="Clique aqui para continuar com seu pedido"
                  tipo="botao"
                  onClick={voltarParaEndereco}
                >
                  Voltar para edição de endereço
                </Botoes>
              </S.BotoesContainer>
            </div>
          </S.BarraLateral>
        </S.CarrinhoContainer>
      )}
      {etapa === 'mensagem' && (
        <S.CarrinhoContainer className={estaAberto ? 'aberto' : ''}>
          <S.Overlay onClick={fechaCarrinho} />
          <S.BarraLateral>
            <h4>Pedido realizado - XXX</h4>
            <S.MensagemContainer>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </S.MensagemContainer>
            <Botoes
              titulo="Clique aqui para continuar com seu pedido"
              tipo="botao"
            >
              Concluir
            </Botoes>
          </S.BarraLateral>
        </S.CarrinhoContainer>
      )}
    </form>
  )
}
export default Carrinho
