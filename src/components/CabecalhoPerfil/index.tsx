import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.png'
import { LogoImg } from '../CabecalhoHome/styles'
import { CabecalhoImage, CabecalhoOpcoes } from './styles'

import { aberto } from '../../store/reducers/carrinho'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const CabecalhoPerfil = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.carrinho)

  const abreCarrinho = () => {
    dispatch(aberto())
  }

  return (
    <>
      <CabecalhoImage>
        <CabecalhoOpcoes className="container">
          <Link to="/">Restaurantes</Link>
          <LogoImg src={logoImg} alt="Logo" />
          <a onClick={abreCarrinho}>{itens.length} produto(s) no carrinho</a>
        </CabecalhoOpcoes>
      </CabecalhoImage>
    </>
  )
}

export default CabecalhoPerfil
