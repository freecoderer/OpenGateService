import React from 'react';
import '../styles/Answer.css';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import { pageEffect } from './animation';
import FadeIn from 'react-fade-in/lib/FadeIn';

export default function Answer4() {
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
      <h2><button className="answer-button">A</button> 
      콘텐츠와 배경 간의 명도 대비는 4.5대 1 이상
        </h2>
      <p>
      색약자(혹은 색맹이 있는 사람)들은 명도대비가 낮으면 화면을 잘 인식하지 못합니다. 
        </p>
        <p>
        따라서 웹 접근성의 측면에서 텍스트 콘텐츠와 배경 간의 명도 대비는
        </p>
        <p>  4.5대 1 이상으로 제작해야 합니다.
        </p>              
      </motion.div>
      
      <div>
      <FadeIn delay={1000}>
        <Link to="/quiz5">
        <button className="next-button">다음으로</button>
        </Link>
      </FadeIn>  
      </div>
    </div>
  );
}
