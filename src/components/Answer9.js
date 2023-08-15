import React from 'react';
import '../styles/Answer.css';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import { pageEffect } from './animation';
import FadeIn from 'react-fade-in/lib/FadeIn';

export default function Answer9() {
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
      <h2><button className="answer-button">B</button>autoplay</h2>
      <p>
      스크린 리더 사용자가 페이지에 방문했을 때, 소리가 자동으로 재생된다면
        </p>
        <p>
        스크린리더 음성과 음성이 겹쳐 정보제공에 혼란을 줄 수 있습니다. 
        </p>
        <p> 따라서 자동으로 영상 혹은 소리가 재생되지 않아야 합니다.
        </p>
        <p>          
        HTML에서는 autoplay속성을 비활성화 하거나 mute속성을 설정할 수 있습니다.
      </p>
      <br></br>
      <p>
      예외적으로 자동재생을 허용하는 경우는 3초 이내 멈출 수 있도록 기능을 구현하거나, 지정된 키를 누르면 재생음을 멈추도록 구현해야 합니다. 
      </p>
      <p>
      이용자가 정지, 일시정지, 음량을 조작할 수 있도록 컨트롤 버튼을 제공한다면 자동재생기능을 적용시킬 수 있습니다.
      </p>
      
      </motion.div>
      <div>
      <FadeIn delay={1000}>
        <Link to="/quiz10">
        <button className="next-button">다음으로</button>
        </Link>
      </FadeIn>  
      </div>
    </div>
  );
}
