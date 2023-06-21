import React from 'react';
import './App.css';

const App = () => {
  const handleImageClick = () => {
    window.location.href = 'https://example.com'; // Replace with your desired URL
  };

  return (
    <div className="container">
      <div className="center">
        <a href="http://tpmbdirect.com/166649/107" onClick={handleImageClick}>
          <img src="https://www.freebiesmysterybox.com/wp-content/uploads/serin.png" alt="Shein Gift Card" />
          <div className="arrow left"></div>
          <div className="arrow right"></div>
        </a>
      </div>
    </div>
  );
};

export default App;
