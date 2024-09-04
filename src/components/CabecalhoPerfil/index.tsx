import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import logoImg from '../../assets/images/logo.png'

import { RootReducer } from '../../store'
import { LogoImg } from '../CabecalhoHome/styles'
import { aberto } from '../../store/reducers/carrinho'

const CabecalhoPerfil = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.carrinho)

  const abreCarrinho = () => {
    dispatch(aberto())
  }

  return (
    <>
      <S.CabecalhoImage>
        <S.CabecalhoOpcoes className="container">
          <Link title="Home" to="/">
            Restaurantes
          </Link>
          <LogoImg src={logoImg} alt="Logo" />
          <a onClick={abreCarrinho}>{itens.length} produto(s) no carrinho</a>
        </S.CabecalhoOpcoes>
      </S.CabecalhoImage>
    </>
  )
}

export default CabecalhoPerfil
