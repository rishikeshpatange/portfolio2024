import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import "./Skills.css"; // Ensure this file contains the necessary styles

const skillsList = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Express", "Python", "Python","Python","Python","Python","Python","Python","Python","Python"];

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {skillsList.map((skill, index) => (
          <span key={index}>{skill} </span>
        ))}
      </motion.div>
    </div>
  );
}

const Skills = () => {
  return (
    <div className="skills">
    <section> 
      {/* First carousel moving in one direction */}
      <ParallaxText baseVelocity={-5}>Skills</ParallaxText>

      {/* Second carousel moving in the opposite direction */}
      <ParallaxText baseVelocity={5}>Skills</ParallaxText>
    </section>
    </div>
  );
};

export default Skills;


{/* <style>



p {
  margin: 0 0 30px 0;
  font-size: 18px;
}


.skills{
  width: 100%;
  height: 100vh;
  margin-top: 10%;
}
.progress {
  position: fixed;
  left: 0;
  right: 0;
  height: 5px;
  background: var(--accent);
  bottom: 100px;
}

.parallax {
  overflow: hidden;
  letter-spacing: -2px;
  line-height: 0.8;
  margin: 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
}

.parallax .scroller {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 104px;
  display: flex;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
}

.parallax span {
  display: block;
  margin-right: 30px;
}

</style> */}