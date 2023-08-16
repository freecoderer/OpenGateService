import React from 'react';
import '../styles/Answer.css';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import { pageEffect } from './animation';
import FadeIn from 'react-fade-in/lib/FadeIn';

export default function Answer10() {
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
      <h2><button className="answer-button">A</button></h2>
      <p>
정보를 제공하지 않고 꾸밈 용도로 사용된 불릿과 이미지의 경우         </p>
        <p> alt 속성을 빈 문자열로 제공하고,        </p>
        <p> 불필요한 대체 텍스트를 제공하지 않아요. 
        </p>
      
      </motion.div>
      <div>
      <FadeIn delay={1000}>
        <Link to="/quiz11">
        <button className="next-button">다음으로</button>
        </Link>
      </FadeIn>  
      </div>
    </div>
  );
}
