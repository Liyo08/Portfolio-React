import React, { useEffect, useRef } from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

/* global VANTA, THREE */

const Hero = () => {
  
  return (
    
      <div className="hero" id="home">
        <img src="" alt="" />
        <h1><span>Hi, I'm Liyo Tom,</span> <br/>Frontend Developer</h1>
        <p>
          I'm a frontend developer with a passion for creating beautiful and functional web applications.I enjoy learning new technologies and continuously improving my skills
        </p>
        <div className="hero-action">
       <div className="hero-connect">
  <a
    href="#contact"
    className="anchorlink"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    Connect with Me
  </a>
</div>

          <a
            href="https://drive.google.com/file/d/14e7bygotwHa7oRutbKDoeNRRxDYde4Z6/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="hero-resume">My Resume</div>
          </a>
        </div>
      </div>
    
  );
};

export default Hero;
