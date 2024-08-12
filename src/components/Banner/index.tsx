import { Image, Title, Text } from './styles'

import bannerImg from '../../assets/images/banner.png'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Text>Italiana</Text>
      <Title>La Dolce Vita Trattoria</Title>
    </div>
  </Image>
)

export default Banner
