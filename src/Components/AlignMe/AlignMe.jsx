import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AlignMe.css'; // Ensure you have the appropriate CSS file for styling
import { useEffect,useRef } from 'react';
import { HashLink } from 'react-router-hash-link';



const AlignMe = () => {
  
    const backBtnRef = useRef(null); // ✅ Ref for back button
   
     useEffect(() => {
       console.log("✅ AlignMe mounted: Scroll to top and focus on Back button");
   
       // Scroll to top immediately
       window.scrollTo({ top: 0, behavior: 'auto' });
   
       // Focus the Back button
       if (backBtnRef.current) {
         backBtnRef.current.focus();
       }
     }, []);


  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/#project'); // Adjust based on your routing structure
  };

  return (
    <div className="project-detail-container">
      {/* Back Button */}
      {/* ✅ Back button wrapped in HashLink with ref */}
           <HashLink to="/#project" smooth>
             <button className="back-btn" ref={backBtnRef}>
               ← Back to Projects
             </button>
           </HashLink>


{/* Project Heading */}
<h1 className="project-title"><span>AlignMe</span> – Personalized Yoga & Wellness App <em>(In Development)</em></h1>

{/* Content Box */}
<div className="project-box">
  <p>
    <strong>AlignMe</strong> is the mobile app evolution of our earlier web-based platform ZenAlign. It aims to deliver a deeply personalized yoga and wellness experience by leveraging AI, smart tracking, and voice-first technologies.
  </p>

  <p>
    Designed for both physical and mental well-being, AlignMe introduces:
    <ul>
      <li><strong>Goal-Based Yoga Plans:</strong> Tailored routines that adapt to user goals such as weight loss, flexibility, or mindfulness.</li>
      <li><strong>Multilingual Voice Support:</strong> Voice-guided instructions in regional languages for accessibility and ease.</li>
      <li><strong>Health Metrics Tracker:</strong> Monitors activity, wellness scores, and recovery trends over time.</li>
      <li><strong>Menstrual Wellness Module:</strong> Provides support and adaptive routines based on menstrual cycle data.</li>
      <li><strong>Gamified Yoga Goals:</strong> Progress-based challenges designed to increase user engagement by 40%.</li>
      <li><strong>Smart Journaling:</strong> Auto-generated insights and wellness summaries for reflection and growth.</li>
      <li><strong>Integrated E-commerce:</strong> Recommends and enables purchases of wellness-related products directly from the app.</li>
      <li><strong>ChatBot:</strong> An intelligent in-app assistant offering health tips, reminders, and personalized suggestions.</li>
    </ul>
  </p>

  <p>
  The app is currently in an active development phase, with our efforts centered on enhancing personalization and embedding intelligent features that adapt to each user's needs and wellness journey. We are continuously refining the user interface, optimizing performance for mobile devices, and experimenting with AI-driven insights to offer real-time, meaningful feedback and motivation. Our aim is to ensure that every user, regardless of experience or background, receives a tailored, inclusive, and engaging wellness experience.
</p>

<p>
  <strong>AlignMe</strong> is a natural evolution of our earlier platform <strong>ZenAlign</strong>, designed to take holistic wellness to the next level. With a mobile-first approach, it combines convenience, accessibility, and intelligent adaptability—allowing users to maintain their health routines anywhere, anytime. By addressing key aspects like regional language support, menstrual health, smart journaling, and gamified goals, AlignMe pushes the boundaries of traditional wellness apps to deliver a deeply personal and future-ready experience.
</p>


  <div className="tools-used">
    <h4>🛠️ Tools & Technologies</h4>
    <p>Flutter, Python (Flask), TensorFlow Lite, Firebase, MediaPipe, REST APIs, Figma</p>
  </div>
</div>

    </div>
  );
};

export default AlignMe;
