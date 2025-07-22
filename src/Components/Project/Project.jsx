import React from 'react'
import './Project.css'
import Project_data from '../../assets/project_data';


const Project = () => {
  return (
    <div className='project'>
        <div className="project-title">
            <h1>My Projects</h1>
            <img src="" alt="" />
        </div>
        <div className="project-container">
{Project_data.map((project,index)=>{
    return <div key={index} className="project-format">
       
        <h2>{project.s_name}</h2>
        <p>{project.s_desc}</p>
        <div className="project-readmore">
            <p>Read more</p>
        </div>
    </div>
})}
        </div>

    </div>
  )
}

export default Project