import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCorrectAnswers } from '../redux/actions';
import '../styles/Quiz.css';
import Image1 from '../images/Q2_a.png';
import Image3 from '../images/Q2_b.png';
import ProgressBar from './ProgressBar';
import {motion} from "framer-motion";
import { pageEffect } from './animation';


function Quiz11({ correctAnswers, updateCorrectAnswers }) {
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
      <ProgressBar currentQuestion={11} totalQuestions={totalQuestions} />
      <h3>
      11. 다음중 접근성을 고려했을때 이상적인 입력창을 고르시오
      </h3>
      <div className="image-group1">
      <div className="image-group4">
  <div>
    <img src={Image1} alt="Quiz7-1" className='quiz111'/>
  </div>
</div>
<div className="image-group4">
  <div>
    <img src={Image3} alt="Quiz7-2" className='quiz112'/>
  </div>
</div>
</div>
      <div className="options">
        <div className="options-container">
          <div className="option3">            
            <Link to="/answer11">
              <button className="circular-button" onClick={handleAnswerButtonClick}>
                A
              </button>
            </Link>
          </div>
          <div className="option4">            
            <Link to="/answer11">
              <button className="circular-button">B</button>
            </Link>
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

const ConnectedQuiz11 = connect(mapStateToProps, { updateCorrectAnswers })(Quiz11);

export default ConnectedQuiz11;
