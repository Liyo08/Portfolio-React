import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src="" alt="" />
                    <p>I am a frontend developer passionate about turning ideas into seamless digital experiences</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p classNamwe='footer-bottom-left'>© 2025 Liyo Tom. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer