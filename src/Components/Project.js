import React, { useEffect} from 'react';
import './Project.css';
import ProjectCard from './ProjectCard';
import "aos/dist/aos.css";
import Aos from 'aos';


function Project() {
  
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);


  return (
    <div className='project' >
      <h1 data-aos="fade-up">Selected <span style={{ fontStyle: 'italic', fontWeight: 500}}>Projects</span></h1>
      <p data-aos="fade-up">Take a look at some of my projects ✦</p>
      <div className="project_container">
      <ProjectCard/>
      <ProjectCard/>

      </div>
      
    </div>
  );
}

export default Project;
