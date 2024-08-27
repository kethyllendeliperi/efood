import Botoes from '../Botoes'
import {
  Overlay,
  CarrinhoContainer,
  BarraLateral,
  PedidoContainer,
  TotalPedido,
  PedidoInfos
} from './styles'

import excluir from '../../assets/images/lixeira.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { fechado, remover } from '../../store/reducers/carrinho'
import { formataPreco } from '../PerfilTemplate'

const Carrinho = () => {
  const { estaAberto, itens } = useSelector(
    (state: RootReducer) => state.carrinho
  )

  const dispatch = useDispatch()

  const fechaCarrinho = () => {
    dispatch(fechado())
  }

  const getPrecoTotal = () => {
    return itens.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remover(id))
  }

  return (
    <CarrinhoContainer className={estaAberto ? 'aberto' : ''}>
      <Overlay onClick={fechaCarrinho} />
      <BarraLateral>
        {itens.map((item) => (
          <PedidoContainer key={item.id}>
            <PedidoInfos>
              <img className="imgPedido" src={item.foto} alt="" />
              <div>
                <h3>{item.nome}</h3>
                <p> {formataPreco(item.preco)}</p>
              </div>
              <img
                onClick={() => removeItem(item.id)}
                className="excluirItem"
                src={excluir}
                alt="Botão de exclusão do item"
              />
            </PedidoInfos>
          </PedidoContainer>
        ))}
        <TotalPedido>
          <p>Valor total</p>
          <p>{formataPreco(getPrecoTotal())}</p>
        </TotalPedido>
        <Botoes titulo="Clique aqui para continuar com seu pedido" tipo="botao">
          Continuar com a entrega
        </Botoes>
      </BarraLateral>
    </CarrinhoContainer>
  )
}
export default Carrinho
