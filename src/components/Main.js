import React from 'react'
import '../styles/Main.css';
import "../fonts/pretendardvariable.css";
import FadeIn from 'react-fade-in/lib/FadeIn';


export default function Main() {
    return (
        <div className='main'>
            <div className='container'>
                <FadeIn delay={500}><h2>웹 접근성 테스트</h2> </FadeIn>                                
                <FadeIn delay={600}><h3>초보 개발자들을 위한 웹 접근성 레벨테스트</h3></FadeIn>
                <FadeIn delay={700}>
                    <div>
                    <img src="img/cutelion2.png" alt="" className='logo'></img>
                    </div>
                </FadeIn>
                <FadeIn delay={600}>
                <div>
                    <a href="/quiz1" class="button btnPush btnbtn">시작하기</a>
                </div>
                </FadeIn>    
            </div>
        </div>
    )
}