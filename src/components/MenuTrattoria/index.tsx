import Button from '../Button'
import { MenuCard, Image, TextCard, TitleCard } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const MenuTrattoria = ({ title, description, image }: Props) => (
  <MenuCard>
    <Image src={image} />
    <TitleCard>{title}</TitleCard>
    <TextCard>{description}</TextCard>
    <Button type="button" title="Clique aqui para adicionar ao carrinho">
      Adicionar ao carrinho
    </Button>
  </MenuCard>
)

export default MenuTrattoria
