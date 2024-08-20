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
  titulo: string
  descricao: string
  imagem: string
}

const DetalhesCardapio = ({ titulo, descricao, imagem }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
    <>
      <MenuCard>
        <Imagem src={imagem} />
        <Titulo>{titulo}</Titulo>
        <Texto>{descricao}</Texto>
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
          <img src={imagem} alt="Imagem da pizza Marguerita" />
          <ModalConteudo>
            <h4>{titulo}</h4>
            <img
              src={botaoFechar}
              alt="Botão de fechar"
              onClick={() => setModalEstaAberto(false)}
            />
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião. <br /> <span>Serve: de 2 a 3 pessoas</span>
            </p>
            <TamanhoBotao>Adicionar ao carrinho - R$ 60,90</TamanhoBotao>
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

export default DetalhesCardapio
