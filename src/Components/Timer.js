import React, { useEffect } from 'react';

const Timer = ({ minutes, seconds, isActive }) => {
  useEffect(() => {
    document.title = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} Pomodoro Clock`;
  }, [minutes, seconds]);

  return (
    <div className="timer">
      <h1>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </h1>
    </div>
  );
};

export default Timer;
