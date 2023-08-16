import React from 'react';
import '../styles/Answer.css';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import { pageEffect } from './animation';
import FadeIn from 'react-fade-in/lib/FadeIn';

export default function Answer13() {
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
        텍스트 입력란의 포커스 자동 실행이란 텍스트 자릿수가 정해져 있는 주민등록번호와 같은 칸을 입력할 때 
         </p>
        <p> 앞자리 6개를 입력하고 나면 자동으로 다음 텍스트 입력란으로 포커스가 이동하는 것을 말합니다.   
        </p>
        <p>시각 장애 환경에서는 포커스가 변경됐다는 사실을 알 수가 없습니다. </p>
       
      </motion.div>
      <div>
      <FadeIn delay={1000}>
        <Link to="/quiz14">
        <button className="next-button">다음으로</button>
        </Link>
      </FadeIn>  
      </div>
    </div>
  );
}
