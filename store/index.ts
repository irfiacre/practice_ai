import { configureStore } from '@reduxjs/toolkit'
import timerReducer from './reducers/timer'

export const store = configureStore({
  reducer: {
    timer: timerReducer,
  }
})