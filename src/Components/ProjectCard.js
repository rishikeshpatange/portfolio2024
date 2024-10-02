import React, { useEffect } from 'react';
import { FaGithub } from 'react-icons/fa'; 
import { CiCircleChevUp } from "react-icons/ci";
import './ProjectCard.css'; 
import "aos/dist/aos.css";
import Aos from 'aos';

function ProjectCard() {

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <div data-aos="fade-up" className="project-card-container">
      <div className="project-card">
        <img
          src="./Images/project1.png" // Replace this with the actual image URL
          alt="Project Thumbnail"
          className="project-img"
        />
        <div className="project-content">
          <h3 className="project-title">ECOMMERCE</h3>
          <div className="project-icons">
            <FaGithub  fontSize={30}  />
            <CiCircleChevUp fontSize={40}  className=" arrow-icon" />
          </div>
        </div>
      </div>
      <p className="project-description">
      Tools: reactjs, framer motion, firebase
      </p>

    </div>
  );
}

export default ProjectCard;
