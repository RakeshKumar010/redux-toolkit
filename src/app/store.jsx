import { configureStore } from '@reduxjs/toolkit'
import messSlice from './messSlice'

export const store = configureStore({
  reducer: {
    message:messSlice
  },
})