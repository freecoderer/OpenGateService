import React from 'react';
import '../styles/Answer.css';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import { pageEffect } from './animation';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Image1 from '../images/7번 정답.png';
import Image3 from '../images/7번 정답2.png';

export default function Answer7() {
  return (
      <div className="answer-container-7">
      <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 1 }}
      variants={pageEffect}
        >
      {/* <h2>정답 &nbsp;</h2><br></br> */}

      <div className="image-group1">
      <div className="image-group4">
  <div>
    <img src={Image1} alt="Answer7-1" className='answer7-1'/>
  </div>
</div>
<div className="image-group4">
  <div>
    <img src={Image3} alt="Answer7-2" className='answer7-2'/>
  </div>
</div>
</div>

      <h2><button className="answer-button">A</button>논리성</h2>
      <p>
      콘텐츠의 논리성은 웹 접근성 중 가장 잘 지켜지고 있는 항목입니다. 
        </p>
        <p>
        그렇지만 시각적인 배치에 따라 코드를 작성하는 경우,
        </p>
        <p>          
        기능의 논리성을 지키지 못할 수 있습니다.         
      </p>
      <p>
      사용자가 기능을 이해하기 쉽도록 기능을 처리하는
      </p>
      <p>
      논리적인 순서에 따라 요소를 배치해야 합니다.
      </p>
      </motion.div>
      <div>
      <FadeIn delay={1000}>
        <Link to="/quiz8">
        <button className="next-button">다음으로</button>
        </Link>
      </FadeIn>
      </div>
    </div>
  );
}
