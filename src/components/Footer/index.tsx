import redes from '../../assets/redes_sociais.png'
import logoImg from '../../assets/logo.png'
import { LogoImg } from '../Header/styles'
import { Container, FooterText, Redes } from './styles'

const Footer = () => (
  <Container>
    <LogoImg src={logoImg} alt="Logo" />
    <Redes src={redes} alt="Redes Sociais Efood" />
    <FooterText>
      A Efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </FooterText>
  </Container>
)

export default Footer
