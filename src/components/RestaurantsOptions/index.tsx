import HomeList from '../../models/HomeList'
import Restaurants from '../Restaurants'

import { List, Container } from './styles'

export type Props = {
  restaurants: HomeList[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <Container>
    <List>
      {restaurants.map((restaurant) => (
        <Restaurants
          key={restaurant.id}
          title={restaurant.title}
          description={restaurant.description}
          tags={restaurant.tags}
          image={restaurant.image}
        />
      ))}
    </List>
  </Container>
)

export default RestaurantsList
