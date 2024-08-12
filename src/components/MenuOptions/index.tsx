import Menu from '../Menu'

import { List, Container } from './styles'

import sushi from '../../assets/images/sushi.png'
import pasta from '../../assets/images/pasta.png'

const MenuList = () => (
  <Container>
    <List>
      <Menu
        title="Hioki Sushi"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
        tags={['Destaque da semana', 'Japonesa']}
        image={sushi}
      />
      <Menu
        title="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        tags={['Italiana']}
        image={pasta}
      />
      <Menu
        title="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        tags={['Italiana']}
        image={pasta}
      />
      <Menu
        title="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        tags={['Italiana']}
        image={pasta}
      />
      <Menu
        title="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        tags={['Italiana']}
        image={pasta}
      />
      <Menu
        title="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        tags={['Italiana']}
        image={pasta}
      />
    </List>
  </Container>
)

export default MenuList
