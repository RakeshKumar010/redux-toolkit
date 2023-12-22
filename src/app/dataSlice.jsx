import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const counterSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    showData: (state,action) => {
      state.value=action.payload
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { showData } = counterSlice.actions

export default counterSlice.reducer