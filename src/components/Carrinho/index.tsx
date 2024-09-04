import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import * as S from './styles'
import excluir from '../../assets/images/lixeira.png'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { fechado, limpar, remover } from '../../store/reducers/carrinho'
import { formataPreco } from '../PerfilTemplate'
import Botoes from '../Botoes'

const Carrinho = () => {
  const { estaAberto, itens } = useSelector(
    (state: RootReducer) => state.carrinho
  )

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [purchase, { isLoading, data, isSuccess }] = usePurchaseMutation()

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
        products: itens.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const verificaErro = (fieldName: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors
    const temErro = estaAlterado && estaInvalido

    return temErro
  }

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

  const validaCamposEntrega = () => {
    const { nomeCompleto, endereco, cidade, cep, numero } = form.values
    return nomeCompleto && endereco && cidade && cep && numero
  }

  const continuarComEntrega = () => {
    setEtapa('entrega')
  }

  const continuarComPagamento = () => {
    if (validaCamposEntrega()) {
      setEtapa('pagamento')
    }
  }

  const voltarParaCarrinho = () => {
    setEtapa('pedido')
  }

  const voltarParaEndereco = () => {
    setEtapa('entrega')
  }

  const irParaHome = () => {
    dispatch(fechado())
    navigate('/')
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(limpar())
    }
  }, [isSuccess, dispatch])

  return (
    <>
      {etapa === 'pedido' && (
        <S.CarrinhoContainer className={estaAberto ? 'aberto' : ''}>
          <S.Overlay onClick={fechaCarrinho} />
          <S.BarraLateral>
            {itens.length > 0 ? (
              <>
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
              </>
            ) : (
              <p className="texto-vazio">
                O carrinho está vazio. <br /> Adicione um prato para continuar
                com a compra.
              </p>
            )}
          </S.BarraLateral>
        </S.CarrinhoContainer>
      )}
      {isSuccess && data ? (
        <S.CarrinhoContainer className={estaAberto ? 'aberto' : ''}>
          <S.Overlay onClick={fechaCarrinho} />
          <S.BarraLateral>
            <h4>Pedido realizado - {data.orderId}</h4>
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
              onClick={irParaHome}
            >
              Concluir
            </Botoes>
          </S.BarraLateral>
        </S.CarrinhoContainer>
      ) : (
        <form onSubmit={form.handleSubmit}>
          {etapa === 'entrega' && itens.length > 0 && (
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
                      className={verificaErro('nomeCompleto') ? 'error' : ''}
                    />
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
                      className={verificaErro('endereco') ? 'error' : ''}
                    />
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
                      className={verificaErro('cidade') ? 'error' : ''}
                    />
                  </S.EntregaInput>
                  <S.InfosContainer>
                    <S.EntregaInput>
                      <label htmlFor="cep">CEP</label>
                      <InputMask
                        id="cep"
                        type="text"
                        name="cep"
                        value={form.values.cep}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={verificaErro('cep') ? 'error' : ''}
                        mask="99999-999"
                      />
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
                        className={verificaErro('numero') ? 'error' : ''}
                      />
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
                      className={verificaErro('complemento') ? 'error' : ''}
                    />
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
                <h4>
                  Pagamento - Valor a pagar {formataPreco(getPrecoTotal())}
                </h4>
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
                      className={verificaErro('nomeNoCartao') ? 'error' : ''}
                    />
                  </S.EntregaInput>
                  <S.NumeroCvv>
                    <S.EntregaInput>
                      <label htmlFor="numeroNoCartao">Número do cartão</label>
                      <InputMask
                        id="numeroNoCartao"
                        type="text"
                        name="numeroNoCartao"
                        value={form.values.numeroNoCartao}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          verificaErro('numeroNoCartao') ? 'error' : ''
                        }
                        mask="9999 9999 9999 9999"
                      />
                    </S.EntregaInput>
                    <S.EntregaInput>
                      <label htmlFor="codigoDeSeguranca">CVV</label>
                      <InputMask
                        id="codigoDeSeguranca"
                        type="text"
                        name="codigoDeSeguranca"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.codigoDeSeguranca}
                        className={
                          verificaErro('codigoDeSeguranca') ? 'error' : ''
                        }
                        mask="999"
                      />
                    </S.EntregaInput>
                  </S.NumeroCvv>
                  <S.InfosContainer>
                    <S.EntregaInput>
                      <label htmlFor="mesVencimento">Mês de vencimento</label>
                      <InputMask
                        id="mesVencimento"
                        type="text"
                        name="mesVencimento"
                        value={form.values.mesVencimento}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={verificaErro('mesVencimento') ? 'error' : ''}
                        mask="99"
                      />
                    </S.EntregaInput>
                    <S.EntregaInput>
                      <label htmlFor="anoVencimento">Ano de vencimento</label>
                      <InputMask
                        id="anoVencimento"
                        type="text"
                        name="anoVencimento"
                        value={form.values.anoVencimento}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={verificaErro('anoVencimento') ? 'error' : ''}
                        mask="9999"
                      />
                    </S.EntregaInput>
                  </S.InfosContainer>
                  <S.BotoesContainer>
                    <Botoes
                      titulo="Clique aqui para continuar com seu pedido"
                      tipo="botao"
                      onClick={form.handleSubmit}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
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
        </form>
      )}
    </>
  )
}
export default Carrinho
