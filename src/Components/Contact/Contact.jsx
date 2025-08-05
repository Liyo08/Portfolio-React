import React from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4d69328e-d46b-4122-9a59-8dd08e263e2b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Message sent successfully!");
      event.target.reset();
    }
  };

  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>

      <div className="contact-section">
        {/* Left - animate from left */}
        <motion.div
          className="contact-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h1>Let's Talk</h1>
          <p>If you have any questions or just want to say hi, feel free to reach out!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <FaPhone className="icon" />
              <p>8848162035</p>
            </div>

            <div className="contact-detail">
              <FaEnvelope className="icon" />
              <p>liyotom04@gmail.com</p>
            </div>

            <div className="contact-detail">
              <FaLinkedin className="icon" />
              <p><a href="https://www.linkedin.com/in/liyotom" target="_blank" rel="noopener noreferrer">linkedin.com/in/liyotom</a></p>
            </div>

            <div className="contact-detail">
              <FaGithub className="icon" />
              <p><a href="https://github.com/Liyo08" target="_blank" rel="noopener noreferrer">github.com/Liyo08</a></p>
            </div>
          </div>
        </motion.div>

        {/* Right - animate from right */}
        <motion.form
          onSubmit={onSubmit}
          className="contact-right"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <label>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          <label>Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          <label>Your Message</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
          <button type='submit' className="contact-submit">Submit now</button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
