import { useState, useRef, useEffect } from 'react';

export default function useStopWatch(initial) {
  const [seconds, setSeconds] = useState(initial);

  let timerID = useRef();

  function start() {
    timerID.current = setInterval(() => {
      setSeconds((state) => {
        if (state.sec == 60) {
          return { ...state, min: state.min + 1, sec: 0 };
        }
        if (state.min == 60) {
          return { ...state, hr: state.hr + 1, min: 0, sec: 0 };
        }

        return { ...state, sec: state.sec + 1 };
      });
    }, 1000);
  }

  function reset() {
    setSeconds(initial);
    clearInterval(timerID.current);
  }

  function pause() {
    clearInterval(timerID.current);
  }

  //mount & unmount
  useEffect(() => {
    clearInterval(timerID.current);
  }, []);

  useEffect(() => {
    if (seconds <= 0) clearInterval(timerID.current);
  }, [seconds]);

  return [seconds, start, pause, reset];
}
