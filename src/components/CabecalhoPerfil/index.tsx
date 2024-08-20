import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.png'
import { LogoImg } from '../CabecalhoHome/styles'
import { CabecalhoImage, CabecalhoOpcoes } from './styles'

const CabecalhoPerfil = () => {
  return (
    <>
      <CabecalhoImage>
        <CabecalhoOpcoes className="container">
          <Link to="/">Restaurantes</Link>
          <LogoImg src={logoImg} alt="Logo" />
          <a href="#">0 produto(s) no carrinho</a>
        </CabecalhoOpcoes>
      </CabecalhoImage>
    </>
  )
}

export default CabecalhoPerfil
