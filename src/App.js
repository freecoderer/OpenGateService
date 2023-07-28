import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {!showContent ? (
        <div className="black-screen"></div>
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
