import { configureStore } from "@reduxjs/toolkit";

import stopwatchReducer from "./stopwatchSlice";

export const store = configureStore({
  reducer: {
    stopwatch: stopwatchReducer
  }
});