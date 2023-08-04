import React from 'react';
import '../styles/ProgressBar.css';

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="progress-bar">
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="progress-text">
        {currentQuestion}/{totalQuestions}
      </div>
    </div>
  );
};

export default ProgressBar;
