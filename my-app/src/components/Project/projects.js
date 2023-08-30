import React from 'react';
import "./projects.css";
import mzamomtsha from '../images/mzamomtsha .png';
import tax from '../images/tax .png';
import finacial from '../images/finacial .png';

const Project = () => {
  return (
    <section id="project">
       <div className="worktittle"><br></br><br></br><br></br><br></br>
        <h1>Projects</h1>
      </div>
      <div className='worksImgs'>
        {/* You can add additional content or images here */}
      </div>
     
      <div className='project-container'>
        <div className='project-card'>
          <img src={mzamomtsha} alt="project" />
          <h2 className='project-title'>Project Title</h2>
          <div className='project-details'>
            <p>This is project description text.</p>
            <button class="custom-button">
  <a href="https://mzamomtsha-website-project.netlify.app/" target="_blank" rel="noopener noreferrer">
    View
  </a>
</button>        
         
          </div>
        </div>
     
        <div className='project-card'>
          <img src={tax} alt="project" />
          <h2 className='project-title'>Project Title</h2>
          <div className='project-details'>
            <p>This is project description text.</p>
            <button class="custom-button">
  <a href="https://mzamomtsha-website-project.netlify.app/" target="_blank" rel="noopener noreferrer">
    View
  </a>
</button>
            
          </div>
        </div>

        <div className='project-card'>
          <img src={finacial} alt="project" />
          <h2 className='project-title'>Project Title</h2>
          <div className='project-details'>
            <p>This is project description text.</p>
            <button class="custom-button">
  <a href="https://mzamomtsha-website-project.netlify.app/" target="_blank" rel="noopener noreferrer">
    View
  </a>
</button>
           
           
           
          </div>
        </div>
      </div>
     
    </section>
  );
}

export default Project;
