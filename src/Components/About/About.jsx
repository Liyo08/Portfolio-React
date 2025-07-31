import React from 'react'
import './About.css'
import  { useEffect, useRef, useState } from 'react';


const About = () => {
     const aboutRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);


    return (
        
       <div
      className={`about ${visible ? 'about-visible' : ''}`}
      id="about"
      ref={aboutRef}
    >
      <div className="about-title fade-up">
        <h1>About</h1>
      </div>
            <div className="about-section">
                <div className="left-section">
                    <img src="" alt="" />
                </div>
                <div className="right-section">
                    <div className="about-para fade-up delay-2">
                        <p>I'm passionate about crafting clean, responsive user interfaces and bringing designs to life with precision and care. A quick learner and natural problem-solver, I enjoy turning ideas into real-world web experiences. I love exploring new technologies and continuously build hands-on expertise through personal and collaborative projects

                        </p>
                    </div>
                    <div className="about-skills fade-up delay-3">
                        <div className="about-skill"><p>HTML, CSS & JS</p><hr style={{ width: "75%" }} /></div>
                        <div className="about-skill"><p>ReactJS</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>C</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>DBMS</p><hr style={{ width: "55%" }} /></div>
                        <div className="about-skill"><p>.NET</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Flutter</p><hr style={{ width: "25%" }} /></div>
                        <div className="about-skill"><p>Figma</p><hr style={{ width: "40%" }} /></div>

                    </div>
                </div>
                <div className="about-achievements fade-up delay-4">
                    <div className="about-achievement">
                        <h1>10+</h1>
                        <p>Projects</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>3+</h1>
                        <p>Experience</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>5+</h1>
                        <p>Accomplishments</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About