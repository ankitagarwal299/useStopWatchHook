import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import useStopWatch from './hooks/useStopWatch';

//https://www.youtube.com/watch?v=RIz7gABVaik

export default function App() {
  const [seconds, start, pause, reset] = useStopWatch({
    hr: 0,
    min: 0,
    sec: 0,
  });

  /*Auto Start timer on load */
  /*
  useEffect(() => {
    start();
  }, []);
  */

  return (
    <div>
      <h1>STOP WATCH!</h1>
      {seconds.hr.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}
      :
      {seconds.min.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}
      :
      {seconds.sec.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}
      <div>
        <button onClick={start}>start</button>
        <button onClick={pause}>pause</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}
