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

const PerfilTemplate = ({ foto, preco, nome, descricao, porcao }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const getDescricao = (descricao: string) => {
    if (descricao.length > 115) {
      return descricao.slice(0, 118) + '...'
    }
    return descricao
  }

  return (
    <>
      <MenuCard>
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
          <img src={foto} alt="Imagem da pizza Marguerita" />
          <ModalConteudo>
            <h4>{nome}</h4>
            <img
              src={botaoFechar}
              alt="Botão de fechar"
              onClick={() => setModalEstaAberto(false)}
            />
            <p>{descricao}</p>
            <p>Serve: {porcao}</p>
            <TamanhoBotao>
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
