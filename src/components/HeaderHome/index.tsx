import { HeaderImg, HeaderText, LogoImg } from './styles'

import logoImg from '../../assets/images/logo.png'

const HeaderHome = () => (
  <HeaderImg>
    <LogoImg src={logoImg} alt="Logo" />
    <HeaderText>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </HeaderText>
  </HeaderImg>
)

export default HeaderHome
