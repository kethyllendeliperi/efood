import styled from 'styled-components'
import { Lista } from '../RestaurantesLista/styles'
import { breakpoints } from '../../styles'

export const ContainerLista = styled(Lista)`
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  li {
    max-height: 320px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    row-gap: 52px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    row-gap: 32px;
  }
`
