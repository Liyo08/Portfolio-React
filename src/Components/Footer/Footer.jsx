import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-title">
                <h1>Subscribe.</h1>
            </div>

            <div className="footer-top">
                <div className="footer-top-left">
                    <img src="" alt="Logo or illustration" />
                    <p>I am a frontend developer passionate about transforming ideas into polished digital experiences.<br />Ernakulam, Kerala</p>
                </div>

                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <input type="email" placeholder='Enter your email' aria-label="Email input" />
                    </div>
                    <button className="footer-subscribe">Subscribe</button>
                </div>
            </div>

            <hr />

            <div className="footer-bottom">
                <p className='footer-bottom-left'>© 2025 Liyo Tom. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
