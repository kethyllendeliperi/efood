import { ContainerLista } from './styles'
import { Restaurantes } from '../../pages/Home'
import DetalhesCardapio from '../DetalhesCardapio'

export type Props = {
  plates: Restaurantes[]
}

const MenuOptions = ({ plates }: Props) => (
  <ContainerLista>
    {plates.map((plate) => (
      <DetalhesCardapio titulo={''} descricao={''} imagem={''} />
    ))}
  </ContainerLista>
)

export default MenuOptions
