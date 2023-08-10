import React from 'react';
import '../styles/Answer.css';
import { Link } from 'react-router-dom';

export default function Answer2() {
  return (
    <div className="answer-container">
      <h2>정답 : </h2>
      <h2><button className="answer-button">B</button> 이미지 최적화 작업을 한다.</h2>
      <p>
      이미지 최적화 작업을 해주어야 합니다.  
        </p>
        <p>
        웹 접근성의 측면에서 바라보면 상대적으로 불편한 환경에서 웹을 사용하는 소외 계층이 이미지 최적화 작업을 통해 보다 빠른 웹 환경을 이용할 수 있습니다.
        </p>
        <p>          
        *모던 이미지 포멧을 사용 하는 것을 권장합니다.        
      </p>
      <p>
      WebP, AVIF. JPEG XL
      </p>
      
      <div>
      <Link to="/quiz2">
        <button className="next-button">다음으로</button>
        </Link>
      </div>
    </div>
  );
}
