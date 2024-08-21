import { Imagem, Titulo, Texto } from '../PerfilTemplate/styles'

import bannerImg from '../../assets/images/banner.png'

const Banner = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Texto>Italiana</Texto>
        <Titulo>La Dolce Vita Trattoria</Titulo>
      </div>
    </Imagem>
  )
}

export default Banner
