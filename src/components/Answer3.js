import React from 'react';
import '../styles/Answer.css';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import { pageEffect } from './animation';
import FadeIn from 'react-fade-in/lib/FadeIn';

export default function Answer3() {
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
      alt 태그의 내용을 채워준다.
        </h2>
      <p>
      시각장애인들은 스크린리더를 사용해 이미지에 대한 설명을 듣습니다.  
        </p>
        <p>
        이때, 스크린 리더는 alt태그의 내용을 인식하는데 alt태그의 내용을 채워주지 않으면
        </p>
        <p> 이미지에 대한 내용을 스크린리더가 인식 할 수 없습니다.
        </p>              
      </motion.div>
      
      <div>
      <FadeIn delay={1000}>
        <Link to="/quiz4">
        <button className="next-button">다음으로</button>
        </Link>
      </FadeIn>  
      </div>
    </div>
  );
}
