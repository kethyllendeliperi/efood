import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.png'
import { LogoImg } from '../HeaderHome/styles'
import { HeaderImage, HeaderOptions } from './styles'

const HeaderTrattoria = () => {
  return (
    <>
      <HeaderImage>
        <HeaderOptions>
          <Link to="/">Restaurantes</Link>
          <LogoImg src={logoImg} alt="Logo" />
          <a href="#">0 produto(s) no carrinho</a>
        </HeaderOptions>
      </HeaderImage>
    </>
  )
}

export default HeaderTrattoria
