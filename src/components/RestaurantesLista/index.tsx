import * as S from './styles'

import { Restaurantes } from '../../pages/Home'
import RestaurantesTemplate from '../RestaurantesTemplate'

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
    <S.Container className="container">
      <S.Lista>
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
      </S.Lista>
    </S.Container>
  )
}

export default RestaurantesLista
