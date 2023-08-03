// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Quiz.css'; // Quiz 컴포넌트에 해당하는 CSS 파일을 import합니다.

// const Quiz = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);

//   // 예시로 문제와 답안을 배열로 저장합니다.
//   const questions = [
//     {
//       question: '웹 접근성은 무엇을 의미하나요?',
//       options: ['웹페이지의 모든 기능이 모든 사용자에게 동등하게 제공되는 것', '웹페이지가 인터넷에 연결되어 있는 상태', '웹페이지가 모든 브라우저에서 호환되는 것', '웹페이지가 반응형으로 제작된 것'],
//       answer: 0, // 정답은 옵션 배열의 인덱스로 표현합니다.
//     },
//     // 다른 문제들을 추가할 수 있습니다.
//   ];

//   const handleAnswerClick = (selectedOptionIndex) => {
//     // 정답 여부를 체크하고 점수를 갱신합니다.
//     if (selectedOptionIndex === questions[currentQuestion].answer) {
//       setScore(score + 1);
//     }

//     // 다음 문제로 이동합니다. 만약 마지막 문제였다면 점수를 보여줍니다.
//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       // 퀴즈가 끝났을 때의 처리를 여기서 합니다.
//       // 예를 들어, 결과 페이지로 이동하거나 점수를 서버에 전송하는 등의 로직을 추가할 수 있습니다.
//       // alert(`퀴즈가 끝났습니다. 최종 점수: ${score}/${questions.length}`);
//     }
//   };

//   // 진행 상태를 계산하여 퍼센트로 변환합니다.
//   const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

//   return (
//     <div className="quiz-container">
//       <div className="quiz-progress">
//         <div className="progress-bar">
//           <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
//         </div>
//         진행중인 퀴즈: {currentQuestion + 1} / {questions.length}
//       </div>
//       <div className="question-box">
//         <h1 className="question-text">{questions[currentQuestion].question}</h1>
//       </div>
//       <div className="options-container">
//         <Link to={`/answer1/${currentQuestion}`} className="option-button" onClick={() => handleAnswerClick(0)}>
//           <div className="option-image-wrapper">
//             <div className="option-image" style={{ backgroundImage: `url("img/mainlogo.png")` }}></div>
//           </div>
//           <div className="option-text option-text-white">A.</div>
//           <div className="option-text option-text-white">{questions[currentQuestion].options[0]}</div>
//         </Link>
//         <Link to={`/answer1/${currentQuestion}`} className="option-button" onClick={() => handleAnswerClick(1)}>
//           <div className="option-image-wrapper">
//             <div className="option-image" style={{ backgroundImage: `url("img/mainlogo.png")` }}></div>
//           </div>
//           <div className="option-text option-text-white">B.</div>
//           <div className="option-text option-text-white">{questions[currentQuestion].options[1]}</div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Quiz;


import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Quiz.css';
import Image from '../images/1.jpg';

export default function Quiz1() {
  return (
    <div className="quiz-container">
      <h2>
        1. 접속자가 많아 페이지 로딩이 느려지고 있습니다. 이때, 어떻게 해야 할까요?
      </h2>
      <img src={Image} alt="Lion" />
      <div className="options">
        <div className="options-container">
          <div className="option">
            <label>
              A. Image Lazy Loading기법을 사용한다.
            </label>
            <Link to="/answer1">
              <button className="circular-button">A</button>
            </Link>
          </div>
          <div className="option">
            <label>
              B. Div 태그를 이용해 소스를 묶는다.
            </label>
            <Link to="/answer1">
              <button className="circular-button">B</button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div>
        <button className="next-button">다음으로</button>
      </div> */}
    </div>
  );
}


