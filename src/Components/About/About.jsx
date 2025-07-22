import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About</h1>
                <img src="" alt="" />
            </div>
            <div className="about-section">
                <div className="left-section">
                    <img src="" alt="" />
                </div>
                <div className="right-section">
                    <div className="about-para">
                        <p></p>
                        <p></p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML, CSS & JS</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>ReactJS</p><hr style={{width:"65%"}}/></div>
                        <div className="about-skill"><p>C</p><hr style={{width:"85%"}}/></div>
                        <div className="about-skill"><p>Python</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>DBMS</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>.NET</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>Flutter</p><hr style={{width:"25%"}}/></div>
                        <div className="about-skill"><p>Figma</p><hr style={{width:"40%"}}/></div>
                        
                    </div>
                </div>
                <div className="about-achievements">
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