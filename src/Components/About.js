import React, { useEffect } from 'react'
import './About.css'
import "aos/dist/aos.css";
import Aos from 'aos';




function About() {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);




  return (
    <div className='about' id='about'>

      <div className='about_text_container'>

        <h1 data-aos="fade-up">About <span className='underline' style={{ fontStyle: 'italic', fontWeight: 400}}>me</span></h1>
        <h3 data-aos="fade-up">Hello there! I'm a <span className='underline'>Developer</span> & <span className='underline'>Creative web designer based in India,</span> pasionate about
          making cool frontend designs and convert them into code ✦
        </h3>
        
        <h3 data-aos="fade-up">With a passion for blending <span className='underline'>aesthetics</span> with <span className='underline'>functionality</span>, I strive to make every project visually appealing  while ensuring it performs efficiently and seamlessly across all devices, love to explore all type of libraries and technologies.
        </h3>


      </div>


    </div>
  )
}

export default About
