import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TimerState {
  minutes: number;
  seconds: number;
}

const initialState: TimerState = {
  minutes: 0,
  seconds: 0,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    startTimer: (state, action: PayloadAction<number>) => {
      state.minutes = action.payload;
      state.seconds = 59;
    },
    resetTimer: (state) => {
      state.minutes = initialState.minutes;
      state.seconds = initialState.seconds;
    },
  },
});

export const { startTimer, resetTimer } = timerSlice.actions;

export default timerSlice.reducer;
