import { configureStore } from '@reduxjs/toolkit'
import UserRedcer from '../redux/user/userSlice'

export const store = configureStore({
  reducer: {
    user:UserRedcer
  },
})