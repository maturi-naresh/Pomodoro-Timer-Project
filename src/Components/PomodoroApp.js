import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import Controls from './Controls';
import CustomizeTimer from './CustomizeTimer';
import './PomodoroApp.css';
import backgroundAudio from "./alarm.mp3"

const PomodoroApp = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [audio] = useState(new Audio(backgroundAudio)); 
  const [originalCustomTime, setOriginalCustomTime] = useState(0);
  const [customTimerValue, setCustomTimerValue] = useState(0);

  useEffect(() => {
    let interval;

    if (isActive) {
      audio.loop = true;
      audio.play();
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            resetTimer();
            setIsActive(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      audio.pause(); 
      clearInterval(interval);
    }

    return () => {
      audio.pause();
      clearInterval(interval);
    };
  }, [isActive, minutes, seconds]);

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    audio.pause();
    resetTimer();
    setIsActive(false);
    setMinutes(Math.floor(originalCustomTime / 60));
    setSeconds(originalCustomTime % 60);
  };

  const resetTimer = () => {
    setOriginalCustomTime(10);
    setMinutes(0);
    setSeconds(10);
  };

  const handleCustomize = () => {
    setShowCustomize(true);
  };

  const handleSaveCustomTimer = (customSeconds) => {
    setOriginalCustomTime(customSeconds);
    setMinutes(Math.floor(customSeconds / 60));
    setSeconds(customSeconds % 60);
    setIsActive(false);
    setShowCustomize(false);
    setCustomTimerValue(customSeconds);
  };

  const handleCancelCustomTimer = () => {
    setShowCustomize(false);
  };

  return (
    <div className="container text-center mt-5">
      {showCustomize ? (
        <CustomizeTimer 
        onSave={handleSaveCustomTimer} 
        onCancel={handleCancelCustomTimer} 
        enteredValue={customTimerValue}
        />
      ) : (
        <>
          <h1>Pomodoro Timer</h1>
          <Timer minutes={minutes} seconds={seconds} isActive={isActive} />
          <Controls
            onStartStop={handleStartStop}
            onReset={handleReset}
            onCustomize={handleCustomize}
            isActive={isActive}
          />
        </>
      )}
    </div>
  );
};

export default PomodoroApp;