import * as S from './styles'

import { LogoImg } from '../CabecalhoHome/styles'
import logoImg from '../../assets/images/logo.png'
import redes from '../../assets/images/redes_sociais.png'

const Rodape = () => (
  <S.Container>
    <LogoImg src={logoImg} alt="Logo" />
    <S.Redes src={redes} alt="Redes Sociais Efood" />
    <S.TextoRodape>
      A Efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </S.TextoRodape>
  </S.Container>
)

export default Rodape
