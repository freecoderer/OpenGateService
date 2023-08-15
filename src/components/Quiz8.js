import React, { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCorrectAnswers } from '../redux/actions';
import '../styles/Quiz.css';
import Image from '../images/8번.png';
import ProgressBar from './ProgressBar';
import {motion} from "framer-motion";
import { pageEffect } from './animation';



function Quiz8({ correctAnswers, updateCorrectAnswers }) {
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
      <ProgressBar currentQuestion={8} totalQuestions={totalQuestions} />
      <h3>
      8. 웹 페이지의 접근성을 자동으로 진단할 수 있는 도구의 이름은?
      </h3>
      <img src={Image} alt="Quiz8" className='quiz1'/>
      <div className="options">
        <div className="options-container">
          <div className="option">            
            <Link to="/answer8">
              <button className="circular-button" onPress={toggleVisible}>
                A
              </button>
            </Link>
            <label>
            <br></br>
            Open CV
            </label>
          </div>
          <div className="option">            
            <Link to="/answer8">
              <button className="circular-button" onClick={handleAnswerButtonClick} >B</button>
            </Link>
          <label>
            <br></br>
            Open WAX
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

const ConnectedQuiz8 = connect(mapStateToProps, { updateCorrectAnswers })(Quiz8);

export default ConnectedQuiz8;
