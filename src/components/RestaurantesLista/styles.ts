import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  padding-top: 80px;
`

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
