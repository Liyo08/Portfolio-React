import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Dromed.css'; // Ensure you have the appropriate CSS file for styling
import { useEffect,useRef } from 'react';
import { HashLink } from 'react-router-hash-link';



const Dromed = () => {
  const backBtnRef = useRef(null); // ✅ Ref for back button
  
    useEffect(() => {
      console.log("✅ Dromed mounted: Scroll to top and focus on Back button");
  
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
     <HashLink to="/#project" smooth>
            <button className="back-btn" ref={backBtnRef}>
              ← Back to Projects
            </button>
          </HashLink>

{/* Project Heading */}
<h1 className="project-title"><span>Dromed</span> – Healing Fast Through Drone-Powered Delivery</h1>

{/* Content Box */}
<div className="project-box">
  <p>
    <strong>Dromed</strong> is a visionary healthcare solution that leverages drone technology to ensure the swift and safe delivery of essential medicines — especially to remote or underserved areas. The core objective is to enhance timely access to healthcare by overcoming geographical barriers and delays in traditional logistics.
  </p>

  <p>
    This idea was conceived and developed during our <strong>Industry Leadership Internship</strong>, where our team pitched the concept of drone-powered medical logistics. As part of the presentation, we built a supporting sample website and a concept video to illustrate the use case in real-world scenarios.
  </p>

  <p>
    Our efforts were recognized at the final presentation stage, where <strong>Dromed</strong> won the <strong>First Prize</strong> among competing teams. The idea was praised for its practicality, scalability, and potential impact on emergency medicine and rural healthcare delivery.
  </p>

  <p>
    <strong>Key Highlights:</strong>
    <ul>
      <li>Drone-based real-time medicine delivery model</li>
      <li>Interactive sample website to simulate user ordering and tracking</li>
      <li>Pitch deck outlining scalability, regulations, and logistics partnerships</li>
      <li>Designed for emergency response, rural clinics, and disaster zones</li>
    </ul>
  </p>

  <p>
    This project emphasized the intersection of technology and social impact, pushing us to think beyond code and focus on real-world logistics, user empathy, and innovation.
  </p>

  <div className="tools-used">
    <h4>🛠️ Tools Used</h4>
    <p>HTML, CSS, JavaScript, Canva (for pitch design)</p>
  </div>
</div>

    </div>
  );
};

export default Dromed;
