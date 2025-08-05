import React, { useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Agriguru.css';

const Agriguru = () => {
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

  return (
    <div className="project-detail-container">
      <h1 className="project-title">
        <span>AgriGuru</span> – Smart Farming Assistant Platform <em>(In Development)</em>
      </h1>

      {/* ✅ Back button wrapped in HashLink with ref */}
      <HashLink to="/#project" smooth>
        <button className="back-btn" ref={backBtnRef}>
          ← Back to Projects
        </button>
      </HashLink>

      <div className="project-box">
        <p>
          <strong>AgriGuru</strong> is a web-based platform built to support farmers and agriculture
          enthusiasts with accessible, organized, and localized information related to smart
          farming practices. The idea for this project was submitted to the <strong>Infosys Global
          Hackathon</strong> and was selected for <strong>Round 1</strong>, where it was rapidly
          developed during an intense 2-day hackathon.
        </p>

        <div>
          <strong>Key Features:</strong>
          <ul>
            <li><strong>Crop Suggestion:</strong> Recommends suitable crops based on region, season, and soil type.</li>
            <li><strong>Weather Forecast:</strong> Integrated real-time weather data to help plan farming activities.</li>
            <li><strong>Government Schemes:</strong> Consolidated list of agricultural schemes and subsidies with descriptions.</li>
            <li><strong>Market Rates:</strong> Live commodity price tracking for key crops.</li>
            <li><strong>Chatbot Assistant:</strong> Simplified query handling for farmers using common questions and responses.</li>
          </ul>
        </div>

        <p>
          The project aimed to bridge the knowledge gap in rural agriculture and provide intuitive
          access to decision-making tools. With a clean and minimal interface, AgriGuru empowers
          users to make better, faster, and more informed decisions for sustainable farming.
        </p>

        <p>
          The project is currently in the development stage with plans to refine the user experience
          and expand features. AgriGuru aims to bridge the information gap in rural agriculture and
          provide intuitive, actionable insights to empower decision-making in farming.
        </p>

        <p>
          Participating in the hackathon as a team of four, including myself, helped sharpen our
          problem-solving skills under pressure and strengthened our resolve to build tech-driven
          solutions that address real-world challenges in agriculture. This experience enhanced our
          ability to work under time constraints and deliver impactful solutions within a short
          window, fueling our passion for building tech that solves real-world problems.
        </p>

        <div className="tools-used">
          <h4>🛠️ Tools Used</h4>
          <p>HTML, CSS, JavaScript, Flask, React</p>
        </div>
      </div>
    </div>
  );
};

export default Agriguru;
