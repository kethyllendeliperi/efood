import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${cores.branco};
  margin-bottom: 56px;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 25px 0;

    p {
      font-size: 32px;
    }

    p:first-child {
      font-weight: 100;
    }

    p:nth-of-type(2) {
      font-weight: bold;
    }
  }
`
