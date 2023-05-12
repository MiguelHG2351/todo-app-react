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
        if(action.payload.id === data.id) {
          return data.isPending = !data.isPending
        }
        return data
      })
    },
    removeTodo: (state, action) => {
      console.log(`Id: ${action.payload.id}`)
      console.log(typeof action.payload.id)
      state.filter(data => {
        console.log(data.id, action.payload.id)
        if(data.id !== action.payload.id) {
          return data
        }
        return null
      })
    },
    editTodo: (state, action) => {
      state.map(data => {
        if(action.payload.id === data.id) {
          return data.title = action.payload.title
        }
        return data
      })
    }
  },
})

export const { addTodo, checkTodo, removeTodo, editTodo } = counterSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.todo

export default counterSlice.reducer