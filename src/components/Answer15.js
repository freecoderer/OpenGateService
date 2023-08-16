import React from 'react';
import '../styles/Answer.css';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import { pageEffect } from './animation';
import FadeIn from 'react-fade-in/lib/FadeIn';

export default function Answer15() {
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
        웹 페이지의 제목은 웹 페이지 탭에 표시되고, 사용자는 제목을 보고 어떤 웹페이지인지 파악할 수 있습니다.  
         </p>
        <p> 웹 페이지의 제목은 웹 페이지 탭에 표시되고, 사용자는 제목을 보고 어떤 웹페이지인지 파악할 수 있습니다.    
        </p>
        <p>그렇기 때문에 스크린 리더 사용자도 웹 페이지의 제목을 듣고 어떤 페이지인지 알 수 있습니다. </p>
        <p>웹페이지에 제목을 지정하지 않거나, 내용과 무관한 제목을 지정한다면 어떤 페이지인지 알아보기 어렵게 되겠죠.</p>
        <p>웹페이지의 제목을 의미 있고, 고유한 이름으로 제공한다면 여러 개의 웹페이지가 열려 있더라도 원하는 웹페이지를 쉽게 찾을 수 있을 거예요.</p>
       
      </motion.div>
      <div>
      <FadeIn delay={1000}>
        <Link to="/result">
        <button className="next-button">결과보기</button>
        </Link>
      </FadeIn>  
      </div>
    </div>
  );
}
