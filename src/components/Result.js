import React from 'react';
import { connect } from 'react-redux'; // Import connect
import '../styles/Result.css';
import "../fonts/pretendardvariable.css";
import { motion } from "framer-motion";
import { pageEffect } from './animation';
import FadeIn from 'react-fade-in/lib/FadeIn';

function Result({ correctAnswers }) {
    let levelMessage = '';

    if (correctAnswers <= 5) {
      levelMessage = '입문자';
    } else if (correctAnswers <= 10) {
      levelMessage = '숙련자';
    } else {
      levelMessage = '전문가';
    }
  
    const imageSrc = `img/${levelMessage}.jpg`;

    return (
        <div>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                transition={{ duration: 1 }}
                variants={pageEffect}
                className='maincontainer'>

                <FadeIn delay={1000}>
                <div><h2 className='resulth2'>결과</h2></div>
                </FadeIn>
                <FadeIn delay={2000}>
                <div>

                <img className='logo' src={imageSrc} alt={levelMessage}></img>

                    {/* <img className='logo' src='img/webaccess.png' alt=''></img> */}

                </div>
                </FadeIn>
                <FadeIn delay={3000}>                                
                <p className='para2'>{correctAnswers}/15</p>

                    <p className='para'>당신의 접근성 레벨은</p>
                    <p className='para2'>{levelMessage}</p> 
                </FadeIn>
                <FadeIn delay={5000}>
                    {/* <p align="center" className='smpara'>접근성에 대해서 중요한 것을 모두 알고 있네요!<br></br>
                    오늘도 당신에 의해서 모두를 위한 웹 생태계가 지켜졌어요</p> */}
                </FadeIn>
                <div className='bottom'>
                    <p className='smpara'>더 완벽해 지고 싶다면,
                    이 책을 읽어보는 것 어떠세요?</p>
                </div>
                <div>
                <img src='img/access1.webp' alt='' className='access'></img>
                    <br></br>
                    <label className='access1label'>
                        웹 접근성 웹?
                    </label>
                </div>
                <div>
                    <p align="left" className='smpara'>이 책을 추천 하는 이유는?</p>
                    <br></br>
                    <p className='smpara'>&#128077; 무료이다!</p>
                    <p className='smpara'>&#128077; 다양한 장애 특성에 따른 접근성 유형소개</p>
                    <p className='smpara'>&#128077; 최신의 실제 사례에 대한 소개</p>
                </div>
                <br></br>
                <br></br>
                <div>
                    <img src='img/access2.jpeg' alt='' className='access'></img>
                    <br></br>
                    <label className='access1label'>
                        Web Accessibility CookBook
                    </label>
                </div>
                <div>
                    <p align="left" className='smpara'>이 책을 추천 하는 이유는?</p>
                    <br></br>
                    <p className='smpara'>&#128077; CookBook 시리즈의 클라스</p>
                    <p className='smpara'>&#128077; 세세면밀한 부분까지 전부 소개함</p>
                    <p className='smpara'>&#128077; 놓쳤던 부분까지 알아볼 수 있게 한다</p>
                </div>
                <br></br>
                <br></br>
                <div>
                    <img src='img/access3.webp' alt='' className='access'></img>
                    <br></br>
                    <label className='access1label'>
                        웹 접근성 프로젝트 시작하기
                    </label>
                </div>
                <div>
                    <p align="left" className='smpara'>이 책을 추천 하는 이유는?</p>
                    <br></br>
                    <p className='smpara'>&#128077; 프로젝트 단계에서 생각하는 법을 알려줌</p>
                    <p className='smpara'>&#128077; 각종 조례와 규정들에 대한 자료집</p>
                    <p className='smpara'>&#128077; 각종 조례와 규정들에 대한 자료집</p>
                </div>
            </motion.div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    correctAnswers: state.correctAnswers, // Get the correctAnswers value from Redux store
  });
  
  export default connect(mapStateToProps)(Result); // Connect the component to the Redux store