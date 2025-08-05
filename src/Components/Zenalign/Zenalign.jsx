import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Zenalign.css'; // Ensure you have the appropriate CSS file for styling
import { useEffect,useRef } from 'react';
import { HashLink } from 'react-router-hash-link';



const Zenalign = () => {
  const backBtnRef = useRef(null); // ✅ Ref for back button
  
    useEffect(() => {
      console.log("✅ Agriguru mounted: Scroll to top and focus on Back button");
  
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
      <h1 className="project-title"><span>ZenAlign</span> – Your Smart Yoga & Wellness Companion</h1>

      {/* Content Box */}
      <div className="project-box">
        <p>
          <strong>ZenAlign</strong> is an AI-powered web platform designed to assist users in improving yoga posture and wellness.
          Built as part of our academic journey, this project blends real-time pose feedback with personalized health tools.
        </p>

        <p>
          <strong>Key Modules:</strong>
          <ul>
            <li><strong>ZenSense:</strong> Real-time yoga pose correction via webcam using AI (MediaPipe + PoseNet).</li>
            <li><strong>ZenFit:</strong> Tutorials with clean visuals and step-by-step pose guidance.</li>
            <li><strong>ZenTracker:</strong> Tracks time spent in each module with daily reset functionality.</li>
            <li><strong>Wellness Module:</strong> Includes:
              <ul>
                <li>Diet Plans: Goal-specific 7-day rotating plans.</li>
                <li>Meditation: Calming music, motivational clips, and guided sessions.</li>
                <li>Yoga Practice: Beginner to advanced levels, plus a Kids section.</li>
                <li>Sun Salutation: Dedicated Surya Namaskar guidance.</li>
              </ul>
            </li>
            <li><strong>ZenBot:</strong> A chatbot offering yoga support and wellness tips.</li>
          </ul>
        </p>

        <p>
          This journey involved intense collaboration, problem-solving, and late-night hustle. One highlight was integrating the Wellness Module just before the submission, which elevated the project significantly.
        </p>

        <p>
          We proudly presented ZenAlign at our Department Expo and plan to expand it into a mobile app with enhanced personalized features.
        </p>

        <p className="team-credits">
          Grateful to my incredible teammates <strong>Joel T John</strong>, <strong>Emily Mariam Shaju</strong>, and <strong>Esther Binu</strong> for their dedication, creativity, and energy throughout this project.
        </p>

        <div className="tools-used">
          <h4>🛠️ Tools Used</h4>
          <p>HTML, CSS, JavaScript, MediaPipe, PoseNet, PHP, MySQL, XAMPP</p>
        </div>
        {/* Demonstration Section */}
        <div className="demo-section">
          <h2>🎥 Project Demonstration</h2>
          <p>
            Curious to see ZenAlign in action? Watch the working demo of our platform showcasing real-time pose correction, wellness features, and more.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1UG8SYpdRo-OVyF7vbPM7U0btnXRwTYsd" // replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
          >
            Watch Demo
          </a>
        </div>

      </div>
    </div>
  );
};

export default Zenalign;
