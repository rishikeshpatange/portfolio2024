import React, { useEffect } from "react";
import { preLoaderAnim } from "./Animations";
import './Preloader.css';

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="text-container">
        <span className="text">HELLO!</span>
        <span className="text">NAMASTE!</span>
        <span className="text">CIAO!</span>
      </div>
    </div>
  );
};

export default PreLoader;
