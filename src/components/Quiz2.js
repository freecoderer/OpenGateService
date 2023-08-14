import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCorrectAnswers } from '../redux/actions';
import '../styles/Quiz.css';
import Image from '../images/2.png';
import ProgressBar from './ProgressBar';
import {motion} from "framer-motion";
import { pageEffect } from './animation';


function Quiz2({ correctAnswers, updateCorrectAnswers }) {
  const totalQuestions = 15;

  useEffect(() => {
    console.log('Updated Correct Answers:', correctAnswers);
  }, [correctAnswers]);

  // Function to handle when A button is clicked
  const handleAnswerButtonClick = () => {
    updateCorrectAnswers(correctAnswers);
    console.log('Updated Correct Answers:', correctAnswers + 1); 
  };

  return (
    <div className="quiz-container">
      <motion.div className="quiz-container"
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.8 }}
      variants={pageEffect}
        >
      <ProgressBar currentQuestion={2} totalQuestions={totalQuestions} />
      <h3>
      2. 해당 이미지 파일이 너무 커서 로딩이 느려지고 있습니다.
      <br></br>
      이때, 웹 접근성의 측면으로 어떻게 해결해야 할까요?
      </h3>
      <img src={Image} alt="Quiz2" className='quiz2'/>
      <div className="options">
        <div className="options-container">
          <div className="option">            
            <Link to="/answer2">
              <button className="circular-button">
                A
              </button>
            </Link>
            <label>
            <br></br>
              A. 이미지를 빼고 글로 대체한다.
            </label>
          </div>
          <div className="option">            
            <Link to="/answer2">
              <button className="circular-button" onClick={handleAnswerButtonClick}>B</button>
            </Link>
            <label>
            <br></br>
              B. 이미지 최적화 작업을 한다.
            </label>
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  correctAnswers: state.correctAnswers, // Get the correctAnswers value from Redux store
});

const ConnectedQuiz2 = connect(mapStateToProps, { updateCorrectAnswers })(Quiz2);

export default ConnectedQuiz2;
