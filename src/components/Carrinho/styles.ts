import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const CarrinhoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 3;

  &.aberto {
    display: flex;
  }
`

export const BarraLateral = styled.aside`
  background-color: ${cores.rosa};
  z-index: 4;
  padding: 32px 8px 0;
  max-width: 360px;
  width: 100%;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    color: ${cores.bege};
    margin-bottom: 8px;
  }

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${cores.bege};
    margin: 8px 0;
  }

  input {
    background-color: ${cores.bege};
    border: 1px solid ${cores.bege};
    width: 100%;
    height: 32px;
    padding: 0 8px;

    &.error {
      border: 2px solid red;
    }
  }

  .texto-vazio {
    font-size: 14px;
    font-weight: bold;
    color: ${cores.bege};
    text-align: center;
  }
`
export const PedidoContainer = styled.ul`
  background-color: ${cores.bege};
  color: ${cores.rosa};
  max-height: 100px;
  height: 100%;
  width: 100%;
  margin-bottom: 16px;

  p {
    font-size: 14px;
    padding: 16px 0 33px;
  }
`

export const PedidoInfos = styled.li`
  display: flex;
  position: relative;
  padding: 8px 0 16px;
  height: 100%;

  .imgPedido {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  div {
    padding-left: 8px;
    flex-grow: 1;
  }

  h3,
  p {
    max-width: 140px;
    width: 100%;
  }

  .excluirItem {
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 12px;
    right: 0;
    margin-right: 12px;
    cursor: pointer;
  }

  h3 {
    max-width: 280px;
  }

  .imgPedido {
    margin-left: 8px;
  }
`

export const TotalPedido = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.bege};
`
export const EntregaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const EntregaInput = styled.div`
  display: flex;
  flex-direction: column;
`

export const NumeroCvv = styled.div`
  display: flex;
  justify-content: space-between;

  #numeroNoCartao {
    max-width: 228px;

    input {
      margin-right: 30px;
    }
  }

  #codigoDeSeguranca {
    max-width: 87px;
  }
`

export const InfosContainer = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr;
  gap: 34px;
`

export const BotoesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
`
export const MensagemContainer = styled.div`
  margin-top: 16px;

  p {
    font-size: 14px;
    color: ${cores.bege};
    margin-bottom: 24px;
  }
`
