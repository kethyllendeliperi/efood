import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  border: 1px solid ${cores.rosa};
  position: relative;
  max-width: 472px;
  height: 398px;
  width: 100%;

  ${TagContainer} {
    margin-right: 6px;
  }

  img {
    width: 100%;
    max-width: 472px;
    height: 217px;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 420px;

    img {
      max-width: 100%;
    }

    ${TagContainer} {
      margin-right: 10px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 450px;
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

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
`
export const CardCabecalho = styled.div`
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
    width: 22px;
    height: 22px;
    margin-bottom: 2px;
  }

  p,
  img {
    position: absolute;
    top: 228px;
    right: 8px;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;

    img {
      width: 20px;
      height: 20px;
    }
  }
`

export const CardDescricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.rosa};
  display: block;
  margin-top: 16px;
  margin-bottom: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
    margin-bottom: 28px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
