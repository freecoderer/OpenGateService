import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Quiz.css';
import Image from '../images/1.jpg';
import ProgressBar from './ProgressBar';

export default function Quiz1() {
  const totalQuestions = 15; // Total number of questions

  return (
    <div className="quiz-container">
      <ProgressBar currentQuestion={1} totalQuestions={totalQuestions} /> {/* Pass the current question number and total number of questions to ProgressBar */}
      <h2>
        1. 접속자가 많아 페이지 로딩이 느려지고 있습니다. 이때, 어떻게 해야 할까요?
      </h2>
      <img src={Image} alt="Quiz1" />
      <div className="options">
        <div className="options-container">
          <div className="option">
            <label>
              A. Image Lazy Loading기법을 사용한다.
            </label>
            <Link to="/answer1">
              <button className="circular-button">A</button>
            </Link>
          </div>
          <div className="option">
            <label>
              B. Div 태그를 이용해 소스를 묶는다.
            </label>
            <Link to="/answer1">
              <button className="circular-button">B</button>
            </Link>
          </div>
        </div>
      </div>      
    </div>
  );
}


