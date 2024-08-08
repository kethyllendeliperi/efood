import styled from 'styled-components'

import headerImage from '../../assets/fundo.png'
import { cores } from '../../styles'

export const HeaderImg = styled.header`
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
`

export const HeaderText = styled.h1`
  font-size: 36px;
  color: ${cores.rosa};
  text-align: center;
  line-height: 42px;
  margin-bottom: 40px;
`
