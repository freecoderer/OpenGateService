import React from 'react';
import '../styles/Answer.css';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import { pageEffect } from './animation';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Image1 from '../images/A5.png';
import Image2 from '../images/Q5_a.png'

export default function Answer14() {
  return (
    <div className="answer-container-14">
      <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 1 }}
      variants={pageEffect}
        >
      {/* <h2>정답 : &nbsp;</h2> */}
      <h2><button className="answer-button">B</button></h2>
      <br></br>
      <br></br>
      <img src={Image1} alt='' className='aa'></img>
      <p>
        네모 박스의 상태는 선택이 되었을 때와 그렇지 않았을 때로 나눌 수 있으며,</p>
        <p>
            우리는 이러한 수많은 선택사항 중 여러 개 선택 가능하도록 하는 것을 체크박스라고 부릅니다.
         </p>
         <p>
            이러한 체크박스가 텍스트를 선택하는 것에 있어 제어하는 용도로 사용된다는 것을 인지할 수 있습니다.
         </p>
        <img src={Image2} alt='' className='aa'></img>


        <p> ‘네이버페이’와 ‘신용카드’ 설정된 두 가지의 선택 중 하나만을 고를 수 있도록 설정되어 있습니다.   
        </p>
        <p>우리는 이렇게 미리 정의된 다수 선택사항의 모임 중 단 하나만 선택할 수 있게 하는 버튼을 라디오버튼이라고 부릅니다. </p>
        <p>이러한 라디오 버튼이 텍스트를 제어하는 용도로 사용된다는 것을 인지할 수 있습니다. </p>
        <br>
        </br>
        <p>결제 수단은 두 가지 중 단 하나만 선택해야 하기 때문에 라디오버튼이 적합합니다. 
</p>
      </motion.div>
      <div>
      <FadeIn delay={1000}>
        <Link to="/quiz15">
        <button className="next-button">다음으로</button>
        </Link>
      </FadeIn>  
      </div>
    </div>
  );
}
