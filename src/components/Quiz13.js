import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCorrectAnswers } from '../redux/actions';
import '../styles/Quiz.css';
import Image from '../images/Q4.png';
import ProgressBar from './ProgressBar';
import {motion} from "framer-motion";
import { pageEffect } from './animation';


function Quiz13({ correctAnswers, updateCorrectAnswers }) {
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
      <ProgressBar currentQuestion={13} totalQuestions={totalQuestions} />
      <h3>
      13. 접근성을 고려했을때 이때 주민등록번호를 전부 입력한 뒤에 일어날일로 적절한 것을 고르시오
      </h3>
      <div className='quiz1313'><img src={Image} alt="Quiz13" className='quiz13'/></div>
      <div className="options">
        <div className="options-container">
          <div className="option">            
            <Link to="/answer13">
              <button className="circular-button" onClick={handleAnswerButtonClick}>
                A
              </button>
            </Link>
            <label>
            <br></br>
            텍스트 입력란에 지정된 자릿수의 값을 모두 입력한 후에도 포커스가 이동하지 않음.
            </label>
          </div>
          <div className="option">            
            <Link to="/answer13">
              <button className="circular-button">B</button>
            </Link>
          <label>
            <br></br>
            텍스트 입력란에 지정되어 있는 자릿수 값을 입력하면 
            다음 포커스가 텍스트 입력란으로 자동으로 이동.

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

const ConnectedQuiz13 = connect(mapStateToProps, { updateCorrectAnswers })(Quiz13);

export default ConnectedQuiz13;
