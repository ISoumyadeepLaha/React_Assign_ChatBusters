// Create a Progress Bar

// In this challenge, the candidate needs to implement a progress/loading bar that animates from 0 to 100% in N seconds. (for example: 3 seconds)

// Start loading bar animation upon a button click.
// Queue multiple progress/loading bars if the button is clicked more than once. (Progress bar N starts animating with progress bar N-1 is done animating)

import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev = prev + 1)), 100);
    }
  }, [filled, isRunning]);

  return (
    <div>
      <div className="progress-bar">
        <div
          style={{
            height: "100%",
            width: `${filled}%`,
            backgroundColor: "#DDD101",
            transition: "width 0.5s",
          }}
        ></div>
        <span className="progress">{filled}%</span>
      </div>
      <button
        className="run-btn"
        onClick={() => {
          setIsRunning(true);
        }}
      >
        Start Run
      </button>
    </div>
  );
};

export default ProgressBar;
