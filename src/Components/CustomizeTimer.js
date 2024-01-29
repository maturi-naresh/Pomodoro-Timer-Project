import React, { useState } from 'react';

  const CustomizeTimer = ({ onSave, onCancel,enteredValue }) => {
  const [customSeconds, setCustomSeconds] = useState(enteredValue);

  const handleSave = () => {
    const parsedSeconds = parseInt(customSeconds, 10);

    if (!isNaN(parsedSeconds) && parsedSeconds > 0) {
      onSave(parsedSeconds);
      setCustomSeconds('');
    }
  };

  const handleCancel = () => {
    onCancel();
    setCustomSeconds('');
  };

  return (
    <div className="customize-timer mt-4">
      <h4>Customize Timer</h4>
      <div className="form-group">
        <label htmlFor="customSeconds">Set Timer (seconds):</label>
        <input
          type="number"
          id="customSeconds"
          className="form-control"
          value={customSeconds}
          onChange={(e) => setCustomSeconds(e.target.value)}
        />
      </div>
      <div className='saveCancel'>
      <button className="btn btn-primary mr-2" onClick={handleSave}>
        Save
      </button>
      <button className="btn btn-secondary" onClick={handleCancel}>
        Cancel
      </button>
      </div>
    </div>
  );
};

export default CustomizeTimer;
