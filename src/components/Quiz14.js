import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCorrectAnswers } from '../redux/actions';
import '../styles/Quiz.css';
import Image1 from '../images/Q5_a.png';
import Image3 from '../images/Q5_b.png';
import ProgressBar from './ProgressBar';
import {motion} from "framer-motion";
import { pageEffect } from './animation';


function Quiz14({ correctAnswers, updateCorrectAnswers }) {
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
      <ProgressBar currentQuestion={14} totalQuestions={totalQuestions} />
      <h3>
      14. 다음중 접근성을 고려했을때 적절한 설계를 고르시오
      </h3>
      <div className="image-group1">
      <div className="image-groupa4">
  <div>
    <img src={Image3} alt="Quiz14-1" className='quiz141'/>
  </div>
</div>
<div className="image-group4">
  <div>
    <img src={Image1} alt="Quiz14-2" className='quiz142'/>
  </div>
</div>
</div>
      <div className="options">
        <div className="options-container">
          <div className="option3">            
            <Link to="/answer14">
              <button className="circular-button">
                A
              </button>
            </Link>
          </div>
          <div className="option4">            
            <Link to="/answer14">
              <button className="circular-button" onClick={handleAnswerButtonClick}>B</button>
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

const ConnectedQuiz14 = connect(mapStateToProps, { updateCorrectAnswers })(Quiz14);

export default ConnectedQuiz14;
