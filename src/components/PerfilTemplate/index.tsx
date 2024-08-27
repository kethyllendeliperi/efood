import { useState } from 'react'
import {
  MenuCard,
  Imagem,
  Modal,
  TamanhoBotao,
  ModalContainer,
  Texto,
  Titulo,
  ModalConteudo
} from './styles'
import botaoFechar from '../../assets/images/close.png'
import Botoes from '../Botoes'
import { aberto, add, Prato } from '../../store/reducers/carrinho'
import { useDispatch } from 'react-redux'

type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const PerfilTemplate = ({
  foto,
  preco,
  id,
  nome,
  descricao,
  porcao
}: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const dispatch = useDispatch()

  const getDescricao = (descricao: string) => {
    if (descricao.length > 110) {
      return descricao.slice(0, 113) + '...'
    }
    return descricao
  }

  const addAoCarrinho = () => {
    const prato: Prato = { foto, preco, id, nome, descricao, porcao }
    dispatch(add(prato))
    setModalEstaAberto(false)
    dispatch(aberto())
  }

  return (
    <>
      <MenuCard className="menuCard">
        <Imagem src={foto} />
        <Titulo>{nome}</Titulo>
        <Texto>{getDescricao(descricao)}</Texto>
        <Botoes
          tipo="botao"
          titulo="Clique aqui para ver detalhes do prato"
          onClick={() => setModalEstaAberto(true)}
        >
          Mais detalhes
        </Botoes>
      </MenuCard>
      <Modal className={modalEstaAberto ? 'visible' : ''}>
        <ModalContainer className="container">
          <img src={foto} alt={`Imagem do prato ${nome}`} />
          <ModalConteudo>
            <img
              src={botaoFechar}
              alt="Botão de fechar"
              onClick={() => setModalEstaAberto(false)}
            />
            <h4>{nome}</h4>
            <p>{descricao}</p>
            <p>Serve: {porcao}</p>
            <TamanhoBotao onClick={addAoCarrinho}>
              Adicionar ao carrinho - {formataPreco(preco)}
            </TamanhoBotao>
          </ModalConteudo>
        </ModalContainer>
        <div
          className="overlay"
          onClick={() => setModalEstaAberto(false)}
        ></div>
      </Modal>
    </>
  )
}

export default PerfilTemplate
