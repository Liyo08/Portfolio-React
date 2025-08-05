import React from 'react'
import './Project.css'
import Project_data from '../../assets/project_data';
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';



const Project = () => {
    const projectRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      //to hide the #project
      const hash = window.location.hash;

  if (hash) {
    const target = document.getElementById(hash.substring(1));
    if (target) {
      // Scroll smoothly
      target.scrollIntoView({ behavior: 'smooth' });

      // Remove the hash from the address bar
      window.history.replaceState(null, '', window.location.pathname);
    }
  }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.05 }
        );

        if (projectRef.current) observer.observe(projectRef.current);
        return () => observer.disconnect();
    }, []);

    const handleReadMore = (projectName) => {
        switch (projectName.toLowerCase()) {
            case 'agriguru':
                navigate('/projects/agriguru');
                break;
            case 'zenalign':
                navigate('/projects/zenalign');
                break;
            case 'alignme':
                navigate('/projects/alignme');
                break;
            case 'student currency':
                navigate('/projects/currency');
                break;
            case 'dromed: healing fast':
                navigate('/projects/dromed');
                break;
            case 'collage smart entry':
                navigate('/projects/smart');
                break;
            default:
                console.warn('No route found for:', projectName);
        }
    };
    return (
      <div id="project">
        <div className='project' ref={projectRef}>
            <div className="project-title">
                <h1>My Projects</h1>
                <img src="" alt="" />
            </div>
             <div className="project-container">
        {Project_data.map((project, index) => {
          const isFirstRow = index < 3;
          const animationClass = isVisible
            ? isFirstRow
              ? 'slide-in-left'
              : 'slide-in-right'
            : '';

          return (
            <div key={index} className={`project-format ${animationClass}`}>
              <h2>{project.s_name}</h2>
              <p>{project.s_desc}</p>
              <div
                className="project-readmore"
                onClick={() => handleReadMore(project.s_name)}
              >
                <p>Read More</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
    )
}

export default Project