import * as S from './styles'
import logoImg from '../../assets/images/logo.png'

const CabecalhoHome = () => (
  <S.CabecalhoImg>
    <S.LogoImg src={logoImg} alt="Logo" />
    <S.CabecalhoTexto>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </S.CabecalhoTexto>
  </S.CabecalhoImg>
)

export default CabecalhoHome
