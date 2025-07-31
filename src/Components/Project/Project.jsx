import React from 'react'
import './Project.css'
import Project_data from '../../assets/project_data';
import { useNavigate } from 'react-router-dom'


const Project = () => {
    const navigate = useNavigate();
    
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
    <div className='project' id='project'>
        <div className="project-title">
            <h1>My Projects</h1>
            <img src="" alt="" />
        </div>
        <div className="project-container">
{Project_data.map((project,index)=>{
    return <div key={index} className="project-format">
       
        <h2>{project.s_name}</h2>
        <p>{project.s_desc}</p>
          <div className="project-readmore" onClick={() => handleReadMore(project.s_name)}>
            <p>Read More</p>
        </div>
    </div>
})}
        </div>

    </div>
  )
}

export default Project