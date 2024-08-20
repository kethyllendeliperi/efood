import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  border: 1px solid ${cores.rosa};
  margin-bottom: 48px;
  position: relative;
  width: 472px;
  height: 398px;

  ${TagContainer} {
    margin-right: 6px;
  }

  img {
    width: 100%;
    max-width: 472px;
    height: 217px;
    object-fit: cover;
  }
`

export const CardContainer = styled.div`
  padding: 8px;
`

export const CardTitulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa};
  display: block;
  margin-bottom: 16px;
`
export const Titulo = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Avaliacao = styled.div`
  display: flex;
  align-items: center;
  color: ${cores.rosa};
  font-weight: bold;
  font-size: 18px;

  p {
    margin-right: 26px;
  }

  img {
    width: 21px;
    height: 21px;
    margin-bottom: 2px;
  }

  p,
  img {
    position: absolute;
    top: 228px;
    right: 8px;
    cursor: pointer;
  }
`

export const CardDescricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.rosa};
  display: block;
  margin: 16px 0;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
