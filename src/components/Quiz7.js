import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCorrectAnswers } from '../redux/actions';
import '../styles/Quiz.css';
import Image1 from '../images/7번 문제.png';
import Image3 from '../images/7번 문제2.png';
import ProgressBar from './ProgressBar';
import {motion} from "framer-motion";
import { pageEffect } from './animation';


function Quiz7({ correctAnswers, updateCorrectAnswers }) {
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
      <ProgressBar currentQuestion={7} totalQuestions={totalQuestions} />
      <h3>
      7. 다음 중 해당 코드에서 잘못된 부분은?
      </h3>
      <div className="image-group1">
      <div className="image-group4">
  <div>
    <img src={Image1} alt="Quiz7-1" className='quiz3-1'/>
  </div>
</div>
<div className="image-group4">
  <div>
    <img src={Image3} alt="Quiz7-2" className='quiz3-3'/>
  </div>
</div>
</div>
      <div className="options">
        <div className="options-container">
          <div className="option3">            
            <Link to="/answer7">
              <button className="circular-button" onClick={handleAnswerButtonClick}>
                A
              </button>
            </Link>
            <label>
            <br></br>
              논리성
            </label>
          </div>
          <div className="option4">            
            <Link to="/answer7">
              <button className="circular-button">B</button>
            </Link>
            <label>
            <br></br>
              오탈자
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

const ConnectedQuiz7 = connect(mapStateToProps, { updateCorrectAnswers })(Quiz7);

export default ConnectedQuiz7;
