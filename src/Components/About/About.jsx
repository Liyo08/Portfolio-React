import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setStartCount(true); // start count-up animation
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
const skills = [
  { name: "HTML, CSS & JS", level: "75%" },
  { name: "ReactJS", level: "60%" },
  { name: "C", level: "70%" },
  { name: "Python", level: "50%" },
  { name: "DBMS", level: "55%" },
  { name: ".NET", level: "50%" },
  { name: "Flutter", level: "25%" },
  { name: "Figma", level: "40%" }
];
  return (
    <div className={`about ${visible ? 'about-visible' : ''}`} id="about" ref={aboutRef}>
      <div className="about-title fade-up">
        <h1>About</h1>
      </div>

      <div className="about-section">
        <div className="left-section">
          <img src="" alt="" />
        </div>

        <div className="right-section">
          <div className="about-para fade-up delay-2">
            <p>
              I'm passionate about crafting clean, responsive user interfaces and bringing designs to life with precision and care. A quick learner and natural problem-solver, I enjoy turning ideas into real-world web experiences. I love exploring new technologies and continuously build hands-on expertise through personal and collaborative projects
            </p>
          </div>

          <div className="about-skills fade-up delay-3">
            <div className="about-skill"><p>C</p><hr style={{ width: "75%" }} /></div>
            <div className="about-skill"><p>HTML, CSS & JS</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>ReactJS</p><hr style={{ width: "45%" }} /></div>
            <div className="about-skill"><p>SQL</p><hr style={{ width: "40%" }} /></div>
            <div className="about-skill"><p>.NET</p><hr style={{ width: "35%" }} /></div>
            <div className="about-skill"><p>Flutter</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>Figma</p><hr style={{ width: "40%" }} /></div>
            <div className="about-skill"><p>Python</p><hr style={{ width: "20%" }} /></div>
          </div>
        </div>

        <div className="about-achievements fade-up delay-4">
          <div className="about-achievement">
            <div className="number-box"><h1>{startCount ? <CountUp end={10} duration={3} delay={1} /> : 0}+</h1></div>
            <p>Projects</p>
          </div>
          <hr />
          <div className="about-achievement">
            <div className="number-box"><h1>{startCount ? <CountUp end={3} duration={3} delay={1} /> : 0}+</h1></div>
            <p>Experience</p>
          </div>
          <hr />
          <div className="about-achievement">
            <div className="number-box"><h1>{startCount ? <CountUp end={45} duration={3} delay={1}/> : 0}+</h1></div>
            <p>Repositories</p>
          </div>
          <hr />
          <div className="about-achievement">
           <div className="number-box"> <h1>{startCount ? <CountUp end={530} duration={3} delay={1}/> : 0}+</h1></div>
            <p>Contributions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

