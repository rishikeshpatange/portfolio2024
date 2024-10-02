import React, { useEffect, useState } from 'react';
import './Header.css'
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import Aos from 'aos';

function Header({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);  // Toggle hamburger menu
  };

  const FadeDown = {
    initial: {
      translateY: -200,
      opacity: 0
    },
    animate: {
      translateY: 0,
      opacity: 1,

      transition: {
        duration: 1.2,
        delay: 4
      }
    }
  }

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);



  return (
    <header className={`header ${theme}`}>

      <motion.div variants={FadeDown} initial="initial" animate="animate" className="logo">
       <h3>CODE BY RISHI</h3>
      </motion.div>

      <motion.div onClick={toggleTheme} variants={FadeDown} initial="initial" animate="animate" className="center-button">
        <p className='button_slide slide_down'>MOOD</p>
        {/* {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Them'} */}
      </motion.div>

      {/* Hamburger Menu */}
      <div className='hamburger_container'>
      <motion.div variants={FadeDown} initial="initial" animate="animate" className="hamburger" onClick={toggleMenu}>
        <div className={menuOpen ? 'line line1 open' : 'line line1'}></div>
        <div className={menuOpen ? 'line line3 open' : 'line line3'}></div>
      </motion.div>
      </div>

      {/* Overlay when hamburger is clicked */}
      {menuOpen && (
        <div className="overlay" onClick={toggleMenu}>
          <ul data-aos="fade-up">
            <li><a href="#about">HOME</a> </li>
            <li><a href="#about">ABOUT</a> </li>
            <li><a href="#about">PROJECTS</a> </li>
            <li><a href="#about">CONTACT</a> </li>

          </ul>
        </div>
      )}
    </header>
  )
}

export default Header