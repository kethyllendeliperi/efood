import styled from 'styled-components'
import { BotaoContainer } from '../Botoes/styles'
import { breakpoints, cores } from '../../styles'

export const MenuCard = styled.div`
  width: 100%;
  max-width: 320px;
  max-height: 338px;
  background-color: ${cores.rosa};
  padding: 8px;
  color: ${cores.bege};
  margin-bottom: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
    max-height: 350px;
  }
`
export const Imagem = styled.img`
  width: 100%;
  max-width: 304px;
  height: 167px;
  object-fit: cover;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
`

export const Texto = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 8px 0;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;
  transition: 0.15s;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .container {
    background-color: ${cores.rosa};
    max-height: 344px;
    flex-direction: column;
    flex-wrap: wrap;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  h4 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0;
    max-width: 656px;

    span {
      display: block;
      padding-top: 16px;
    }
  }

  h4,
  p {
    color: ${cores.branco};
  }

  @media (max-width: ${breakpoints.tablet}) {
    img {
      width: 230px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    .container {
      flex-direction: row;
      max-height: 390px;
    }

    img {
      height: 80px;
      width: 100%;
    }

    h4 {
      margin-top: 6px;
    }

    p {
      margin: 8px 0;
    }
  }
`

export const ModalContainer = styled.div`
  position: relative;
  padding: 32px;
  display: flex;
  z-index: 1;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 18px;
  }
`

export const ModalConteudo = styled.div`
  margin-left: 24px;

  img {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 60%;
    margin-left: 12px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100%;
    margin-left: 0;

    img {
      height: 12px;
      width: 12px;
    }
  }
`

export const TamanhoBotao = styled(BotaoContainer)`
  max-width: 218px;
`
