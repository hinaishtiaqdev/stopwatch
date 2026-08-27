import { createSlice } from "@reduxjs/toolkit";

const stopwatchSlice = createSlice({
  name: "stopwatch",

  initialState: {
    seconds: 0,
    running: false
  },

  reducers: {

    start: (state) => {
      state.running = true;
    },

    stop: (state) => {
      state.running = false;
    },

    reset: (state) => {
      state.seconds = 0;
      state.running = false;
    },

    tick: (state) => {
      if (state.running) {
        state.seconds = state.seconds + 1;
      }
    }

  }
});

export const {
  start,
  stop,
  reset,
  tick
} = stopwatchSlice.actions;

export default stopwatchSlice.reducer;