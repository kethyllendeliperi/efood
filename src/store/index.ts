import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import carrinhoReducer from './reducers/carrinho'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDeafaultMiddleware) =>
    getDeafaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
