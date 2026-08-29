import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  start,
  stop,
  reset,
  tick
} from "./redux/stopwatchSlice";

import "./App.css";

function App() {

  const dispatch = useDispatch();

  const seconds = useSelector(
    (state) => state.stopwatch.seconds
  );

  const running = useSelector(
    (state) => state.stopwatch.running
  );

  useEffect(() => {

    let timer;

    if (running) {

      timer = setInterval(() => {
        dispatch(tick());
      }, 1000);

    }

    return () => {
      clearInterval(timer);
    };

  }, [running, dispatch]);


  return (
    <div className="stopwatch-container">

      <div className="stopwatch-box">

        <h1>⏱ Stopwatch</h1>

        <div className="time">
          {seconds}
        </div>

        <p className="status">
          {running ? "Stopwatch is Running" : "Stopwatch is Stopped"}
        </p>

        <div className="buttons">

          <button
            className="start-btn"
            onClick={() => dispatch(start())}
          >
            Start
          </button>

          <button
            className="stop-btn"
            onClick={() => dispatch(stop())}
          >
            Stop
          </button>

          <button
            className="reset-btn"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;