import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCorrectAnswers } from '../redux/actions';
import '../styles/Quiz.css';
import Image2 from '../images/4번 A.png';
import Image4 from '../images/4번 B.png';
import ProgressBar from './ProgressBar';
import {motion} from "framer-motion";
import { pageEffect } from './animation';


function Quiz4({ correctAnswers, updateCorrectAnswers }) {
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
      <ProgressBar currentQuestion={4} totalQuestions={totalQuestions} />
      <h3>
      4. 다음 중 색약자를 위한 글은 무엇인가요?
      </h3>
      <div className="options-4">
        <div className="options-container">
          <div className="option3">            
            <Link to="/answer4">
              <button className="circular-button" onClick={handleAnswerButtonClick}>
                A
              </button>
            </Link>
            <label>
            <div>
    <img src={Image2} alt="Quiz4-1" className='quiz4'/>
  </div>
            </label>
          </div>
          <div className="option4">            
            <Link to="/answer4">
              <button className="circular-button">B</button>
            </Link>
            <label>
            <div>
    <img src={Image4} alt="Quiz4-2" className='quiz4'/>
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

const ConnectedQuiz4 = connect(mapStateToProps, { updateCorrectAnswers })(Quiz4);

export default ConnectedQuiz4;
