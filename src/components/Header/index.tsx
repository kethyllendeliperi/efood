import { HeaderImg, HeaderText, LogoImg } from './styles'

import logoImg from '../../assets/logo.png'

const Header = () => {
  return (
    <HeaderImg>
      <LogoImg src={logoImg} alt="Logo" />
      <HeaderText>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </HeaderText>
    </HeaderImg>
  )
}

export default Header
