import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Currency.css'; // Ensure you have the appropriate CSS file for styling
import { useEffect,useRef } from 'react';
import { HashLink } from 'react-router-hash-link';



const Currency = () => {
  const backBtnRef = useRef(null); // ✅ Ref for back button
  
    useEffect(() => {
      console.log("✅ Currency mounted: Scroll to top and focus on Back button");
  
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
      <h1 className="project-title"><span>Student Currency</span> – Learning Financial Discipline</h1>

      {/* Content Box */}
      <div className="project-box">
        <p>
          <strong>Student Currency</strong> is a digital financial ecosystem designed exclusively for students, where parents act as financial administrators. It aims to instill budgeting skills, responsible spending, and savings habits through a gamified yet practical approach to money management.
        </p>

        <p>
          The concept was pitched during the <strong>Managerial Conquest</strong> organized by <strong>IEEE at Trivandrum</strong>, where it gained positive attention for addressing a relevant real-world need using tech innovation and behavioral design.
        </p>

        <p>
          <strong>Core Features:</strong>
          <ul>
            <li>Parent-controlled digital wallets for students</li>
            <li>Monthly or task-based allowances tied to goals or performance</li>
            <li>In-app transaction history and visual spending analytics</li>
            <li>Smart saving challenges and milestone rewards</li>
            <li>Marketplace simulation for in-campus use or partner stores</li>
          </ul>
        </p>

        <p>
          This project promotes early financial literacy and responsibility while keeping parents in control of how funds are distributed and used. It also opens possibilities for school-based rewards and scholarships to be directly linked to a student's digital currency account.
        </p>

      

        <div className="tools-used">
          <h4>🛠️ Tools Used</h4>
          <p>Figma (for UI/UX design), PowerPoint (pitch deck), Conceptual Mockups (No-code prototype tools)</p>
        </div>
      </div>
    </div>

      );
};

      export default Currency;
