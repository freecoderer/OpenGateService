import React from 'react';
import '../styles/Answer.css';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import { pageEffect } from './animation';
import FadeIn from 'react-fade-in/lib/FadeIn';

export default function Answer5() {
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
      <h2><button className="answer-button">A</button>광과민성 문제</h2>
      <p>
      광과민성 증후군 환자와 학습장애인, 저시력 장애인의 경우 지속적으로 깜빡임이 노출된 콘텐츠를 보게 되면
        </p>
        <p>          
        발작을 일으킬 수 있기 때문에 웹 제작시 반드시 유의해야 합니다.       
      </p>
      <p>
      초당 3-50회 주기로 깜빡이거나 번쩍이는 콘텐츠를 제공하지 말아야 하며 되도록 깜빡임/번쩍임의 시간을 3초 미만으로 제한해야 합니다.
      </p>
      <p>
      유의해야 할 태그: blink, marquee 등 *PEAT를 사용해 ‘깜빡임과 번쩍임 사용 제한’ 항목의 준수정도를 확인할 수 있습니다.

      </p>
      </motion.div>
      <div>
      <FadeIn delay={1000}>
        <Link to="/quiz6">
        <button className="next-button">다음으로</button>
        </Link>
      </FadeIn>
      </div>
    </div>
  );
}
