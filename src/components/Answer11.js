import React from 'react';
import '../styles/Answer.css';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import { pageEffect } from './animation';
import FadeIn from 'react-fade-in/lib/FadeIn';

export default function Answer11() {
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
사용자 입력, 링크, 버튼 등 컨트롤 요소는 테두리 안으로 여백을 적어도 1mm 이상 배치해야 합니다.
         </p>
        <p> 근접한 컨트롤끼리 겹치거나 너무 가까워 선택하는 데에 불편함이 있지 않도록 간격을 만들어줘야 합니다. 
        </p>
       
      </motion.div>
      <div>
      <FadeIn delay={1000}>
        <Link to="/quiz12">
        <button className="next-button">다음으로</button>
        </Link>
      </FadeIn>  
      </div>
    </div>
  );
}
