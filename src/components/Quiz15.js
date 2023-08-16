import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCorrectAnswers } from '../redux/actions';
import '../styles/Quiz.css';
import Image1 from '../images/Q6_a.png';
import Image3 from '../images/Q6_b.png';
import ProgressBar from './ProgressBar';
import {motion} from "framer-motion";
import { pageEffect } from './animation';


function Quiz15({ correctAnswers, updateCorrectAnswers }) {
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
      <ProgressBar currentQuestion={15} totalQuestions={totalQuestions} />
      <h3>
      15. 다음중 접근성을 고려했을때 적절한 것을 고르시오
      </h3>
      <div className="image-group1">
      <div className="image-groupa4">
  <div>
    <img src={Image3} alt="Quiz15-1" className='quiz141'/>
  </div>
</div>
<div className="image-group4">
  <div>
    <img src={Image1} alt="Quiz15-2" className='quiz142'/>
  </div>
</div>
</div>
      <div className="options">
        <div className="options-container">
          <div className="option3">            
            <Link to="/answer15">
              <button className="circular-button">
                A
              </button>
            </Link>
          </div>
          <div className="option4">            
            <Link to="/answer15">
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

const ConnectedQuiz15 = connect(mapStateToProps, { updateCorrectAnswers })(Quiz15);

export default ConnectedQuiz15;
