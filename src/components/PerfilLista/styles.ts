import styled from 'styled-components'
import { Lista } from '../RestaurantesLista/styles'

export const ContainerLista = styled(Lista)`
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  li {
    max-height: 320px;
  }
`
