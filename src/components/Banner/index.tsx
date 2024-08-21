import { Imagem } from './styles'

import { Restaurantes } from '../../pages/Home'

type Props = {
  cardapio: Restaurantes
}

const Banner = ({ cardapio }: Props) => {
  return (
    <Imagem style={{ backgroundImage: `url(${cardapio.capa})` }}>
      <div className="container">
        <p>{cardapio.tipo}</p>
        <p>{cardapio.titulo}</p>
      </div>
    </Imagem>
  )
}

export default Banner
