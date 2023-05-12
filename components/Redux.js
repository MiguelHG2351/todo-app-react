import { configureStore } from '@reduxjs/toolkit'

import todoReducer from './todoReducer'

export function makeStore() {
  return configureStore({
    reducer: { todo: todoReducer },
  })
}

const store = makeStore()

export default store