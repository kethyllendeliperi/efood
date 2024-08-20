import styled from 'styled-components'
import { CabecalhoImg } from '../CabecalhoHome/styles'
import { cores } from '../../styles'

export const CabecalhoImage = styled(CabecalhoImg)`
  height: 163px;
  width: 100%;
  background-size: cover;

  a {
    color: ${cores.rosa};
    text-decoration: none;
    font-weight: bold;
  }
`

export const CabecalhoOpcoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
