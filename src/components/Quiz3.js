import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCorrectAnswers } from '../redux/actions';
import '../styles/Quiz.css';
import Image1 from '../images/3번 A.jpg';
import Image2 from '../images/3번 A코드.png';
import Image3 from '../images/3번 B.png';
import Image4 from '../images/3번 B코드.png';
import ProgressBar from './ProgressBar';
import {motion} from "framer-motion";
import { pageEffect } from './animation';


function Quiz3({ correctAnswers, updateCorrectAnswers }) {
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
      <ProgressBar currentQuestion={3} totalQuestions={totalQuestions} />
      <h3>
      3. 두 이미지 중 태그가 잘못된 것은 무엇인가요?
      </h3>
      <div className="image-group1">
      <div className="image-group2">
  <div>
    <img src={Image1} alt="Quiz3-1" className='quiz3-1'/>
  </div>
</div>
<div className="image-group2">
  <div>
    <img src={Image3} alt="Quiz3-3" className='quiz3-3'/>
  </div>
</div>
</div>
      <div className="options">
        <div className="options-container">
          <div className="option3">            
            <Link to="/answer3">
              <button className="circular-button" onClick={handleAnswerButtonClick}>
                A
              </button>
            </Link>
            <label>
            <div>
    <img src={Image2} alt="Quiz3-2" className='quiz3-2'/>
  </div>
            </label>
          </div>
          <div className="option4">            
            <Link to="/answer3">
              <button className="circular-button">B</button>
            </Link>
            <label>
            <div>
    <img src={Image4} alt="Quiz3-4" className='quiz3-4'/>
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

const ConnectedQuiz3 = connect(mapStateToProps, { updateCorrectAnswers })(Quiz3);

export default ConnectedQuiz3;
