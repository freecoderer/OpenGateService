import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCorrectAnswers } from '../redux/actions';
import '../styles/Quiz.css';
import Image2 from '../images/Q1.png';
import Image4 from '../images/Q1_a.png';
import Image1 from '../images/Q1_b.png';
import ProgressBar from './ProgressBar';
import {motion} from "framer-motion";
import { pageEffect } from './animation';


function Quiz10({ correctAnswers, updateCorrectAnswers }) {
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
      <ProgressBar currentQuestion={10} totalQuestions={totalQuestions} />
      <h3>
      10. 다음 상황에서 접근성을 고려했을 때에 가장 이상적인 코드를 고르시오.</h3>
      <br>
      </br>
      <img src={Image2} alt='Quiz10'/>
      <div className="options-6">
        <div className="options-container">
          <div className="option3">            
            <Link to="/answer10">
              <button className="circular-button" onClick={handleAnswerButtonClick}>
                A
              </button>
            </Link>
            <br></br>
            <label>
            <div>
    <img src={Image4} alt="Quiz6-1" className='quiz10'/>
  </div>
            </label>
          </div>
          <div className="option4">            
            <Link to="/answer10">
              <button className="circular-button">B</button>
            </Link>
            <br></br>
            <label>
            <div>
    <img src={Image1} alt="Quiz10-2" className='quiz10'/>
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

const ConnectedQuiz10 = connect(mapStateToProps, { updateCorrectAnswers })(Quiz10);

export default ConnectedQuiz10;
