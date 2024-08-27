import { Restaurantes } from '../../pages/Home'
import RestaurantesTemplate from '../RestaurantesTemplate'
import { Lista, Container } from './styles'

export type Props = {
  restaurantes: Restaurantes[]
}

export const letraMaiuscula = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()

const RestaurantesLista = ({ restaurantes }: Props) => {
  const getRestaurantesTags = (restaurante: Restaurantes) => {
    const tags = []

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
        {restaurantes.map((restaurante) => (
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
