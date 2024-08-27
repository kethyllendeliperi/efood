import styled from 'styled-components'
import { CabecalhoImg } from '../CabecalhoHome/styles'
import { breakpoints, cores } from '../../styles'

export const CabecalhoImage = styled(CabecalhoImg)`
  height: 163px;
  width: 100%;
  background-size: cover;

  a {
    color: ${cores.rosa};
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;

    a {
      width: 98px;
      text-align: center;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;

    a {
      width: 78px;
      text-align: center;
    }
  }
`

export const CabecalhoOpcoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
