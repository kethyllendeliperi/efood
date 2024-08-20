import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { cores } from '../../styles'

export const BotaoContainer = styled.button`
  border: 0px solid ${cores.bege};
  color: ${cores.rosa};
  background-color: ${cores.bege};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  width: 100%;
  cursor: pointer;
`
export const BotaoLink = styled(Link)`
  border: 0px solid ${cores.rosa};
  color: ${cores.bege};
  background-color: ${cores.rosa};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`
