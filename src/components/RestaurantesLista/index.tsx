import { Restaurantes } from '../../pages/Home'
import RestaurantesTemplate from '../RestaurantesTemplate'
import { Lista, Container } from './styles'

export type Props = {
  restaurantes: Restaurantes[]
}

const RestaurantesLista = ({ restaurantes }: Props) => {
  const ordenaResturantes = (restaurantes: Restaurantes[]) => {
    return restaurantes.sort((restaurante1, restaurante2) => {
      if (restaurante1.destacado && !restaurante2.destacado) return -1
      if (!restaurante1.destacado && restaurante2.destacado) return 1
      return 0
    })
  }

  const restaurantesOrdenados = ordenaResturantes(restaurantes)

  const getRestaurantesTags = (restaurante: Restaurantes) => {
    const tags = []

    const letraMaiuscula = (string: string) =>
      string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()

    if (restaurante.destacado === true) {
      tags.push('Destaque da semana')
    }

    if (restaurante.tipo) {
      tags.push(letraMaiuscula(restaurante.tipo))
    }

    return tags
  }

  return (
    <Container className="container">
      <Lista>
        {restaurantesOrdenados.map((restaurante) => (
          <RestaurantesTemplate
            id={restaurante.id}
            key={restaurante.id}
            titulo={restaurante.titulo}
            tags={getRestaurantesTags(restaurante)}
            tipo={restaurante.tipo}
            avaliacao={restaurante.avaliacao}
            descricao={restaurante.descricao}
            imagem={restaurante.capa}
          />
        ))}
      </Lista>
    </Container>
  )
}

export default RestaurantesLista
