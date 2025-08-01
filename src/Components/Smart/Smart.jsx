import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Smart.css'; // Ensure you have the appropriate CSS file for styling
import { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';



const Smart = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when page loads
  }, []);


  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/#project'); // Adjust based on your routing structure
  };

  return (
    <div className="project-detail-container">
      {/* Back Button */}
     <HashLink to="/#project" smooth>
  <button className="back-btn">← Back to Projects</button>
</HashLink>


     {/* Project Heading */}
<h1 className="project-title"><span>Smart Entry</span> – Digitizing Campus Entry <em>(In Development)</em></h1>

{/* Content Box */}
<div className="project-box">
  <p>
    <strong>College Smart Entry</strong> is a digital visitor entry system designed to modernize the current paper-based approach used in many educational institutions. The goal is to significantly improve administrative response times, enhance data accessibility, and streamline campus security — with early testing already showing a potential 45% improvement in response efficiency.
  </p>

  <p>
    Built by a team of classmates and currently in development, this project was inspired by the inefficiencies we observed in our own college, where visitor tracking and attendance were manually recorded on paper. Our system aims to solve this with a digital-first experience that is simple, secure, and scalable.
  </p>

  <p>
    <strong>Key Features:</strong>
    <ul>
      <li><strong>Digital Visitor Logging:</strong> Real-time digital entry system with unique QR pass generation.</li>
      <li><strong>Admin Dashboard:</strong> Tracks daily entries, logs timestamps, and raises alerts for unauthorized attempts.</li>
      <li><strong>Instant Notifications:</strong> Admin and host receive instant alerts upon visitor entry.</li>
    </ul>
  </p>

  <p>
    This project reflects our effort to bridge the gap between outdated processes and efficient digital workflows within campus environments. Once fully implemented, it can help reduce manual workload, prevent unauthorized entries, and enable faster decision-making for staff and administrators.
  </p>

  <p>
    Platform is being developed using <strong>React</strong> for the frontend, with a supportive backend and database to handle login, visitor data, and session management.
  </p>

  <div className="tools-used">
    <h4>🛠️ Tools Used</h4>
    <p>React.js, JavaScript, CSS, MongoDB</p>
  </div>
</div>

    </div>
  );
};

export default Smart;
