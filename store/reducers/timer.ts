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
    startTimer: (state) => {
      state.minutes = 0;
      state.seconds = 0;
    },
    stopTimer: (state) => {
      state.minutes = 0;
      state.seconds = 0;
    },

    resetTimer: (state) => {
      state.minutes = state.seconds;
      state.seconds = state.seconds;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startTimer, stopTimer, resetTimer } = timerSlice.actions;

export default timerSlice.reducer;
