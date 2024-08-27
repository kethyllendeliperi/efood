import styled from 'styled-components'

import headerImage from '../../assets/images/fundo.png'
import { breakpoints, cores } from '../../styles'

export const CabecalhoImg = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 384px;
  width: 100%;
  padding: 40px;
  background-image: url(${headerImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
export const LogoImg = styled.img`
  max-width: 125px;
  height: 58px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 68px;
    max-width: 135px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 48px;
    max-width: 115px;
  }
`

export const CabecalhoTexto = styled.h1`
  font-size: 36px;
  color: ${cores.rosa};
  text-align: center;
  line-height: 42px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 30px;
  }
`
