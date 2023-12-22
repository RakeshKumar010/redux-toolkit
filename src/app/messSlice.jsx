import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const messSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setName: (state, action) => {
        state.value = action.payload;
      }
  },
})

// Action creators are generated for each case reducer function
export const { setName } = messSlice.actions

export default messSlice.reducer