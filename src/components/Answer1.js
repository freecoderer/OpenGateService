import React from 'react';
import { useParams } from 'react-router-dom';

const Answer1 = () => {
  const { questionIndex } = useParams();
  const selectedOptionIndex = parseInt(questionIndex, 10);

  // 예시로 문제와 답안을 배열로 저장합니다.
  const questions = [
    {
      question: '웹 접근성은 무엇을 의미하나요?',
      options: ['웹페이지의 모든 기능이 모든 사용자에게 동등하게 제공되는 것', '웹페이지가 인터넷에 연결되어 있는 상태', '웹페이지가 모든 브라우저에서 호환되는 것', '웹페이지가 반응형으로 제작된 것'],
      answer: 0, // 정답은 옵션 배열의 인덱스로 표현합니다.
      explanation: '웹 접근성은 웹페이지의 모든 기능이 모든 사용자에게 동등하게 제공되는 것을 의미합니다.',
    },
    // 다른 문제들을 추가할 수 있습니다.
  ];

  // Get the selected question based on the question index from the URL parameter
  const selectedQuestion = questions[selectedOptionIndex];

  return (
    <div className="quiz-container">
      <div className="question-box">
        <h1 className="question-text">해설 - {selectedQuestion.question}</h1>
        <p className="explanation">{selectedQuestion.explanation}</p>
      </div>
    </div>
  );
};

export default Answer1;
