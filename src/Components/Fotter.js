import React, { useEffect } from 'react';
import './Fotter.css'
import Marquee from "react-fast-marquee";
import "aos/dist/aos.css";
import Aos from 'aos';

function Fotter() {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <footer className="footer">
      <div  data-aos="fade-up" className="footer-title">
        <Marquee speed={70}>
          <div className='fotter_marquee'>
            <h1>Let's Work </h1>
            <h1 style={{ fontStyle: 'italic', fontWeight: 400, marginLeft: "20px" }}> together</h1>
            <img src="./Images/fotter_icon.svg" alt="" />
          </div>
        </Marquee>
      </div>
      <span className="fotter_line"></span>
      <div  data-aos="fade-up" className="footer-buttons">
          <button> <a href="mailto:rishikeshpatangesick@gmail.com">rishikeshpatangesick@gmail.com</a> </button>
          <button> <a href="tel:+91-7823069861">+91-7823069861</a></button>
      </div>
      <div  data-aos="fade-up" className="footer-bottom">
        <div className="footer-version">
          <p>Version 2024</p>
        </div>
        <div className="footer-socials">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GITHUB</a>
        </div>
      </div>
    </footer>

  )
}

export default Fotter



// <div className='fotter'>
// <Marquee speed={150}>
//   <div className='fotter_marquee'>
//     <h1>Let's Work </h1>
//     <h1 style={{ fontStyle: 'italic', fontWeight: 400, marginLeft: "20px" }}> together</h1>
//     <img src="./Images/fotter_icon.svg" alt="" />
//   </div>
// </Marquee>
// <span className="fotter_line"></span>
// <div className="fotter_contact_container">

//   <div className='fotter_contact'>
//     <button> <a href="mailto:rishikeshpatangesick@gmail.com">rishikeshpatangesick@gmail.com</a> </button>
//     <button> <a href="tel:+91-7823069861">+91-7823069861</a></button>
//   </div>
//   <div className="fotter_social">
//     <div className='version'>
//       <p>VERSION</p>
//       <h2>2024 edition</h2>
//     </div>
//     <div className='social_media'>
//       <p>SOCIALS</p>
//       <div className='social_media_container'>
//         <a href='https://www.instagram.com/rishikeshpatange/' target="_blank">
//           <FaInstagram className='react_icons' fontSize={"21px"} />
//         </a>
//         <a href='https://github.com/rishikeshpatange' target="_blank">
//           <FaGithub className='react_icons' fontSize={"21px"} />
//         </a>
//         <a href='https://www.linkedin.com/in/rishikesh-patange-1979251b6/' target="_blank">
//           <FaLinkedinIn className='react_icons' fontSize={"21px"} />
//         </a>
//       </div>

//     </div>

//   </div>

// </div>
// </div>