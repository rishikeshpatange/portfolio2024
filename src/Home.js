import React from 'react';
import './Home.css'
import Banner from './Components/Banner';
import About from './Components/About';
// import Skills from './Components/Skills';
import Project from './Components/Project';


function Home({theme}) {
  console.log('Theme in Home:', theme); // Before passing to Banner
  return (
    <div className={`Home ${theme}`}>
      <Banner theme={theme}/>
      <About/>
      {/* <Skills/> */}
      <Project/>
    </div>
  )
}

export default Home