import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCorrectAnswers } from '../redux/actions';
import '../styles/Quiz.css';
import Image2 from '../images/6번 A.png';
import Image4 from '../images/6번 B.png';
import ProgressBar from './ProgressBar';
import {motion} from "framer-motion";
import { pageEffect } from './animation';


function Quiz6({ correctAnswers, updateCorrectAnswers }) {
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
      <ProgressBar currentQuestion={6} totalQuestions={totalQuestions} />
      <h3>
      6. 지적장애(혹은 발달장애)가 있는 사람들을 위해 페이지를 만들 때, 어떤 ui가 알맞을까요?
      </h3>
      <div className="options-6">
        <div className="options-container">
          <div className="option3">            
            <Link to="/answer6">
              <button className="circular-button" onClick={handleAnswerButtonClick}>
                A
              </button>
            </Link>
            <label>
            <div>
    <img src={Image2} alt="Quiz6-1" className='quiz6'/>
  </div>
            </label>
          </div>
          <div className="option4">            
            <Link to="/answer6">
              <button className="circular-button">B</button>
            </Link>
            <label>
            <div>
    <img src={Image4} alt="Quiz6-2" className='quiz6'/>
  </div>
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

const ConnectedQuiz6 = connect(mapStateToProps, { updateCorrectAnswers })(Quiz6);

export default ConnectedQuiz6;
