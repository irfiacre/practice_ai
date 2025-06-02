import { configureStore } from '@reduxjs/toolkit'
import timerReducer from './reducers/timer'
import readingAnswersReducer from './reducers/attempt/readingAnswers'

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    readingAnswers: readingAnswersReducer
  }
})