import { CabecalhoImg, CabecalhoTexto, LogoImg } from './styles'

import logoImg from '../../assets/images/logo.png'

const CabecalhoHome = () => (
  <CabecalhoImg>
    <LogoImg src={logoImg} alt="Logo" />
    <CabecalhoTexto>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </CabecalhoTexto>
  </CabecalhoImg>
)

export default CabecalhoHome
