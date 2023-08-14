import React from 'react';
import '../styles/Answer.css';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import { pageEffect } from './animation';
import FadeIn from 'react-fade-in/lib/FadeIn';

export default function Answer1() {
  return (
      <div className="answer-container">
      <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 1 }}
      variants={pageEffect}
        >
      {/* <h2>정답 &nbsp;</h2><br></br> */}
      <h2><button className="answer-button">A</button> Image Lazy Loading 사용</h2>
      <p>
        Image Lazy Loading은 페이지 안에 있는 실제 이미지들이 화면에 보여져야 할 때 로딩을 할 수 있도록 하는 기술입니다.
        </p>
        <p>
        로딩시점을 뒤로 미루어 리소스의 로딩을 미루어 웹 성능과 디바이스 내 리소스 활용도 증가,
        </p>
        <p>          
        그리고 연관된 비용을 줄이는 데 도움을 줄 수 있습니다.        
      </p>
      <p>
        이는 웹 자체의 성능을 높여 좋은 기기를 사용하지 못하는 소외계층을 위한 웹 접근성 기술이기도 합니다.
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
