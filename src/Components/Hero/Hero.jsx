import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div className='hero' id='home'>
        <img src="" alt="" />
        <h1><span>Hi, I'm Liyo Tom,</span> Frontend Developer</h1>
        <p>I'm a frontend developer with a passion for creating beautiful and functional web applications. I love to learn new technologies and improve my skills.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchorlink' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
</div>
    </div>
  )
}

export default Hero