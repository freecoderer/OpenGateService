import React, { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCorrectAnswers } from '../redux/actions';
import '../styles/Quiz.css';
import Image from '../images/5번.png';
import ProgressBar from './ProgressBar';
import {motion} from "framer-motion";
import { pageEffect } from './animation';



function Quiz5({ correctAnswers, updateCorrectAnswers }) {
  const totalQuestions = 15;

  // Function to handle when A button is clicked
  const handleAnswerButtonClick = () => {
    updateCorrectAnswers(correctAnswers);
    console.log('Updated Correct Answers:', correctAnswers + 1); // Log the updated value
  };

  
  useEffect(() => {
    console.log('Updated Correct Answers:', correctAnswers);
  }, [correctAnswers]);

  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  }


  return (
    <div className="quiz-container">
      <motion.div className="quiz-container"
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.8 }}
      variants={pageEffect}
        >
      <ProgressBar currentQuestion={5} totalQuestions={totalQuestions} />
      <h3>
      5. 다음 경고는 어떤 문제를 방지하기 위한 경고일까요?
      </h3>
      <img src={Image} alt="Quiz5" className='quiz1'/>
      <div className="options">
        <div className="options-container">
          <div className="option">            
            <Link to="/answer5">
              <button className="circular-button" onClick={handleAnswerButtonClick} onPress={toggleVisible}>
                A
              </button>
            </Link>
            <label>
            <br></br>
            광과민성 문제
            </label>
          </div>
          <div className="option">            
            <Link to="/answer5">
              <button className="circular-button">B</button>
            </Link>
          <label>
            <br></br>
            오랜 미디어 시청 문제
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

const ConnectedQuiz5 = connect(mapStateToProps, { updateCorrectAnswers })(Quiz5);

export default ConnectedQuiz5;
