import React from "react";
import { delay, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './Skills.css'; // Import the dedicated CSS file




const letters = ["P","R","O","J","E","T","S"];

const Skill = () => {


  const [ref, inView] = useInView({
    triggerOnce: false, // Allows animation to trigger multiple times (when in and out of view)
    threshold: 0.4, // Trigger when 10% of the component is in view
  });

  const letterVariants = {
    hidden: { opacity: 0, y: 350 }, // Move letters down and make them transparent when hidden
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Delay the appearance of each letter
        duration: 0.4,
      },
    }),
  };

  return (
    <div className="skill-container">
      {/* Text (HELLOO) */}
      <h1 ref={ref} className="hello-text">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // Toggle visibility based on scroll direction
            variants={letterVariants}
            className="hello-letter"
          >
            {letter}
          </motion.span>
        ))}
      </h1>

    </div>
  );
};

export default Skill;
