import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const TagContainer = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.bege};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  display: inline-block;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 8px 6px;
    font-size: 18px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 6px 4px;
    font-size: 14px;
  }
`
