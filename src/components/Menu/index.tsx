import Tag from '../Tag'

import {
  Card,
  CardContainer,
  CardDescription,
  CardTitle,
  Rating,
  Tags,
  Title
} from './styles'

import star from '../../assets/estrela.png'
import Button from '../Button'

type Props = {
  title: string
  description: string
  tags: string[]
  image: string
}

const Menu = ({ title, description, image, tags }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Tags>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Tags>
    <CardContainer>
      <Title>
        <CardTitle>{title}</CardTitle>
        <Rating>
          <p>4.9</p>
          <img src={star} alt="Estrela de avaliação" />
        </Rating>
      </Title>
      <CardDescription>{description}</CardDescription>
      <Button
        type="link"
        to="/perfil"
        title="Clique aqui para ver nossas opções"
      >
        Saiba mais
      </Button>
    </CardContainer>
  </Card>
)

export default Menu
