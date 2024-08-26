import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  width: 100%;
  height: 298px;
  background-color: ${cores.bege};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  margin-top: 120px;
`

export const Redes = styled.img`
  max-width: 88px;
  height: 24px;
`

export const TextoRodape = styled.p`
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: ${cores.rosa};
`
