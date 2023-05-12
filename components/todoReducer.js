import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    title: 'Primera tarea'
  }
]

export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    }
  },
})

export const { addTodo } = counterSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.todo

export default counterSlice.reducer