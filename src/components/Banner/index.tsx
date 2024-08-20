import { Imagem } from './styles'

import bannerImg from '../../assets/images/banner.png'

const Banner = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <p>Italiana</p>
        <p>La Dolce Vita Trattoria</p>
      </div>
    </Imagem>
  )
}

export default Banner
