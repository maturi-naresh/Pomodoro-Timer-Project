import React from 'react';

const Controls = ({ onStartStop, onReset, isActive, onCustomize }) => {
  return (
    <div className="buttons">
      <button className="btn btn-primary blue me-3 pt-2 pr-4 pb-2 pl-4" onClick={onStartStop}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button className="btn btn-dark me-3 pt-2 pr-4 pb-2 pl-4" onClick={onReset}>
        Reset
      </button>
      <button className="btn btn-success pt-2 pr-4 pb-2 pl-4" onClick={onCustomize}>
        Customize
      </button>
    </div>
  );
};

export default Controls;
