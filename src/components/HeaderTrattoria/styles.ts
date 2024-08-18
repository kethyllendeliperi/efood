import styled from 'styled-components'
import { HeaderImg } from '../HeaderHome/styles'
import { cores } from '../../styles'

export const HeaderImage = styled(HeaderImg)`
  height: 163px;
  width: 100%;
  background-size: cover;

  a {
    color: ${cores.rosa};
    text-decoration: none;
    font-weight: bold;
  }
`

export const HeaderOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
