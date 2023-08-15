import React from 'react';
import '../styles/Answer.css';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import { pageEffect } from './animation';
import FadeIn from 'react-fade-in/lib/FadeIn';

export default function Answer8() {
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
      <h2><button className="answer-button">B</button> 
      Open WAX
        </h2>
      <p>
      OpenWAX는 웹 페이지의 접근성을 자동으로 진단할 수 있는 도구입니다. 
        </p>
        <p>
        OpenWAX는 플러그인 형태로 Google Chrome 브라우저와 Mozilla FireFox브라우저에서 제공됩니다.
        </p>
        <p>자동 진단이 가능한 항목을 통해 진단 결과를 확인하고 수동 진단을 병행해야 합니다.
        </p>                      
      </motion.div>
      
      <div>
      <FadeIn delay={1000}>
        <Link to="/quiz9">
        <button className="next-button">다음으로</button>
        </Link>
      </FadeIn>  
      </div>
    </div>
  );
}
