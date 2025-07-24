import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>If you have any questions or just want to say hi, feel free to reach out!</p>
                <div className="contact-details">
                     <div className="contact-detail"><p>8848162035</p></div>
                    <div className="contact-detail"><p>liyotom04@gmail.com</p></div>
                    <div className="contact-detail"><p>www.linkedin.com/in/liyotom</p></div>
                    <div className="contact-detail"><p>https://github.com/Liyo08</p></div>
                    
                  
                </div>
            </div>
            <form  className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Your Message</label>
                <textarea name="message"  rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
            
        </div>
    </div>
  )
}

export default Contact