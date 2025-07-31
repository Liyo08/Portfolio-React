import React from 'react';
import './Splash.css';

const Splash = () => {
  return (
    <div className="splash-screen">
      <h1 className="splash-text">Welcome to My Portfolio<br/></h1>
      
      <div className="progress-bar-wrapper">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
};

export default Splash;
