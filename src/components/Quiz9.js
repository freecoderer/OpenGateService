import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCorrectAnswers } from '../redux/actions';
import '../styles/Quiz.css';
import Image from '../images/9번.png';
import ProgressBar from './ProgressBar';
import {motion} from "framer-motion";
import { pageEffect } from './animation';


function Quiz9({ correctAnswers, updateCorrectAnswers }) {
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
      <ProgressBar currentQuestion={9} totalQuestions={totalQuestions} />
      <h3>
      9. 다음 html코드에서 웹 접근성을 위해 수정되어야 할 부분은?
      </h3>
      <img src={Image} alt="Quiz9" className='quiz2'/>
      <div className="options">
        <div className="options-container">
          <div className="option">            
            <Link to="/answer9">
              <button className="circular-button">
                A
              </button>
            </Link>
            <label>
            <br></br>
            loop
            </label>
          </div>
          <div className="option">            
            <Link to="/answer9">
              <button className="circular-button" onClick={handleAnswerButtonClick}>B</button>
            </Link>
            <label>
            <br></br>
            autoplay
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

const ConnectedQuiz9 = connect(mapStateToProps, { updateCorrectAnswers })(Quiz9);

export default ConnectedQuiz9;
