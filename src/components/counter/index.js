import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Counter = ({ timerKey, setTimerKey, timerValue, setTimerValue }) => {

  const handleTimerComplete = () => {
    setTimerValue(0);
  };

  useEffect(() => {
    if (timerValue > 0) {
      const timerInterval = setInterval(() => {
        setTimerValue((prevValue) => prevValue - 1);
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [timerValue]);

  return (
    <CountdownCircleTimer key={timerKey} isPlaying duration={30} colors={"#191919"} onComplete={handleTimerComplete} size={150}>
      {({ remainingTime }) => {
        if (remainingTime !== timerValue) {
          setTimerValue(remainingTime);
        }
        return remainingTime;
      }}
    </CountdownCircleTimer>
  );
};
export default Counter;
