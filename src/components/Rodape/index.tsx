import redes from '../../assets/images/redes_sociais.png'
import logoImg from '../../assets/images/logo.png'
import { LogoImg } from '../CabecalhoHome/styles'
import { Container, TextoRodape, Redes } from './styles'

const Footer = () => (
  <Container>
    <LogoImg src={logoImg} alt="Logo" />
    <Redes src={redes} alt="Redes Sociais Efood" />
    <TextoRodape>
      A Efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </TextoRodape>
  </Container>
)

export default Footer
