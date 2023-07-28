import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const [showText, setShowText] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    const blackScreenTimer = setTimeout(() => {
      setShowText(true);
    }, 3000);

    // const textTimer = setTimeout(() => {
    //   setShowContent(true);
    // }, 8000);

    return () => {
      clearTimeout(blackScreenTimer);
      // clearTimeout(textTimer);
    };
  }, []);

  const handleButtonClick = () => {
    setButtonClicked(true);
    setShowContent(true);
  };

  return (
    <div className="app">
      {!showContent ? (
        <div className="black-screen">
          {showText && (
            <div className="centered-text">
              <p className="white-text">
                현재 보시는 화면은 시각장애인이 보는 화면의 모습입니다.
              </p>
              <p className="white-text">웹 페이지를 이해할 수 있도록 코드를 수정하여 웹 접근성을 높여주세요!</p>
              {!buttonClicked && (
                <button className="start-button" onClick={handleButtonClick}>
                  시작하기
                </button>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="split-screen">
          <div className="left-screen"></div>
          <div className="right-screen">
            <pre>
              <code className="source-code">
                {`// Your source code goes here`}
              </code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
