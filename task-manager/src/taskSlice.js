import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    taskList: []
  },
  reducers: {
    addTask: (state, action) => {
      state.taskList.push(action.payload)
    }
  }
})

export const { addTask } = taskSlice.actions
export default taskSlice.reducer

