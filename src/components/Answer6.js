import React from 'react';
import '../styles/Answer.css';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import { pageEffect } from './animation';
import FadeIn from 'react-fade-in/lib/FadeIn';

export default function Answer6() {
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
      아이콘, 큰 글씨 사용
        </h2>
      <p>
      지적장애나 발달장애인의 웹 접근성을 높이기 위해서는 
        </p>
        <p>
        크고 이해하기 쉬운 아이콘을 사용해야 하며,
        </p>
        <p>큰 글씨로 이해하기 쉽도록 명시해야 합니다.
        </p>              
      </motion.div>
      
      <div>
      <FadeIn delay={1000}>
        <Link to="/quiz7">
        <button className="next-button">다음으로</button>
        </Link>
      </FadeIn>  
      </div>
    </div>
  );
}
