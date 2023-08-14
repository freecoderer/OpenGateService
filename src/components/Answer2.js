import React from 'react';
import '../styles/Answer.css';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import { pageEffect } from './animation';
import FadeIn from 'react-fade-in/lib/FadeIn';

export default function Answer2() {
  return (
    <div className="answer-container">
      <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 1 }}
      variants={pageEffect}
        >
      {/* <h2>정답 : &nbsp;</h2> */}
      <br></br>
      <h2><button className="answer-button">B</button> 이미지 최적화 작업을 한다.</h2>
      <p>
      이미지 최적화 작업을 해주어야 합니다.  
        </p>
        <p>
        웹 접근성의 측면에서 바라보면 상대적으로 불편한 환경에서 웹을 사용하는 소외 계층이
        </p>
        <p> 이미지 최적화 작업을 통해 보다 빠른 웹 환경을 이용할 수 있습니다.
        </p>
        <p>          
        *모던 이미지 포멧을 사용 하는 것을 권장합니다.        
      </p>
      <p>
      WebP, AVIF. JPEG XL
      </p>
      
      </motion.div>
      <div>
      <FadeIn delay={1000}>
        <Link to="/quiz2">
        <button className="next-button">다음으로</button>
        </Link>
      </FadeIn>  
      </div>
    </div>
  );
}
