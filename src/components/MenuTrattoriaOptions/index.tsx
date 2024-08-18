import MenuTrattoria from '../MenuTrattoria'
import { ContainerList } from './styles'
import TrattoriaList from '../../models/TrattoriaList'

export type Props = {
  plates: TrattoriaList[]
}

const TrattoriaOptions = ({ plates }: Props) => (
  <ContainerList>
    {plates.map((plate) => (
      <MenuTrattoria
        key={plate.id}
        title={plate.title}
        description={plate.description}
        image={plate.image}
      />
    ))}
  </ContainerList>
)

export default TrattoriaOptions
