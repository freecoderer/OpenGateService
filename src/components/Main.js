import React from 'react'
import '../styles/Main.css';
import "../fonts/pretendardvariable.css";


export default function Main() {
    return (
        <div className='main'>
            <div className='container'>
                <h1>접근성 테스트</h1>
                <br />
                <h3>초보 개발자들을 위한 웹 접근성 레벨테스트</h3>
                <div>
                    <img src="img/mainlogo.png" alt="" className='logo'></img>
                </div>
                <div>
                    <a href="/quiz" class="button btnPush btnbtn">시작하기</a>
                </div>    
            </div>
        </div>
    )
}