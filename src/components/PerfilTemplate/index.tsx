import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import botaoFechar from '../../assets/images/close.png'

import { aberto, add, Prato } from '../../store/reducers/carrinho'
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
      <S.MenuCard className="menuCard">
        <S.Imagem src={foto} />
        <S.Titulo>{nome}</S.Titulo>
        <S.Texto>{getDescricao(descricao)}</S.Texto>
        <Botoes
          tipo="botao"
          titulo="Clique aqui para ver detalhes do prato"
          onClick={() => setModalEstaAberto(true)}
        >
          Mais detalhes
        </Botoes>
      </S.MenuCard>
      <S.Modal className={modalEstaAberto ? 'visible' : ''}>
        <S.ModalContainer className="container">
          <img src={foto} alt={`Imagem do prato ${nome}`} />
          <S.ModalConteudo>
            <img
              src={botaoFechar}
              alt="Botão de fechar"
              onClick={() => setModalEstaAberto(false)}
            />
            <h4>{nome}</h4>
            <p>{descricao}</p>
            <p>Serve: {porcao}</p>
            <S.TamanhoBotao onClick={addAoCarrinho}>
              Adicionar ao carrinho - {formataPreco(preco)}
            </S.TamanhoBotao>
          </S.ModalConteudo>
        </S.ModalContainer>
        <div
          className="overlay"
          onClick={() => setModalEstaAberto(false)}
        ></div>
      </S.Modal>
    </>
  )
}

export default PerfilTemplate
