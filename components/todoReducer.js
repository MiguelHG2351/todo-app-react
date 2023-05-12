import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 1,
    title: 'Primera tarea',
    isPending: false,
  }
]

export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    checkTodo: (state, action) => {
      state.map(data => {
        console.log('Here')
        if(action.payload.id === data.id) {
          return data.isPending = !data.isPending
        }
        return data
      })
    }
  },
})

export const { addTodo, checkTodo } = counterSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.todo

export default counterSlice.reducer