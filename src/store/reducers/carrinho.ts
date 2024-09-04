import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Prato = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type CarrinhoEstado = {
  itens: Prato[]
  estaAberto: boolean
}

const initialState: CarrinhoEstado = {
  itens: [],
  estaAberto: false
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      state.itens.push(action.payload)
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    aberto: (state) => {
      state.estaAberto = true
    },
    fechado: (state) => {
      state.estaAberto = false
    },
    limpar: (state) => {
      state.itens = []
    }
  }
})

export const { add, aberto, fechado, remover, limpar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
