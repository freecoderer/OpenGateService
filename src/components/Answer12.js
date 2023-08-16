import React from 'react';
import '../styles/Answer.css';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import { pageEffect } from './animation';
import FadeIn from 'react-fade-in/lib/FadeIn';

export default function Answer12() {
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
      <h2><button className="answer-button">B</button></h2>
      <p>
        스크린 리더는 특수 문자도 읽기 때문에 불필요한 음성을 출력할 수 있습니다. 
         </p>
        <p> 웹페이지 제목에 특수문자는 한 개로 제한합니다.  
        </p>
       
      </motion.div>
      <div>
      <FadeIn delay={1000}>
        <Link to="/quiz13">
        <button className="next-button">다음으로</button>
        </Link>
      </FadeIn>  
      </div>
    </div>
  );
}
