import React, { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCorrectAnswers } from '../redux/actions';
import '../styles/Quiz.css';
import Image from '../images/1.png';
import ProgressBar from './ProgressBar';
import {motion} from "framer-motion";
import { pageEffect } from './animation';



function Quiz1({ correctAnswers, updateCorrectAnswers }) {
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
      <ProgressBar currentQuestion={1} totalQuestions={totalQuestions} />
      <h3>
        1. 이미지가 많아 페이지 로딩이 느려지고 있습니다. 이때, 어떻게 해야 할까요?
      </h3>
      <img src={Image} alt="Quiz1" className='quiz1'/>
      <div className="options">
        <div className="options-container">
          <div className="option">            
            <Link to="/answer1">
              <button className="circular-button" onClick={handleAnswerButtonClick} onPress={toggleVisible}>
                A
              </button>
            </Link>
            <label>
            <br></br>
            A. Image Lazy Loading기법을 사용한다.
            </label>
          </div>
          <div className="option">            
            <Link to="/answer1">
              <button className="circular-button">B</button>
            </Link>
          <label>
            <br></br>
            B. Div 태그를 이용해 소스를 묶는다.
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

const ConnectedQuiz1 = connect(mapStateToProps, { updateCorrectAnswers })(Quiz1);

export default ConnectedQuiz1;
