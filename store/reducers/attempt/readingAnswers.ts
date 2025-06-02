import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Answer {
  questionId: number; // index of the question
  answer: string; // selected answer
  passage: number;
}

const initialState: Array<Answer> = [];

export const readingAnswers = createSlice({
  name: "readingAnswers",
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<Answer>) => {
      state.push(action.payload);
    },
    resetAnswers: (state) => initialState,
  },
});

export const { addAnswer, resetAnswers } = readingAnswers.actions;

export default readingAnswers.reducer;
