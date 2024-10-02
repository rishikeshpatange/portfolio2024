import React from 'react';
import './Banner.css'
import { motion } from "framer-motion"


const Banner = ({ theme }) => {
  const imageSrc = theme === 'light' ? `/images/photo2.svg?v=${Date.now()}` : `/images/photo.avif?v=${Date.now()}`;
  console.log('Current theme:', theme);


//   const globe_animation = {
//     initial: {},
//     animate: {
//         rotate: [0, 90, 180],
//         transition: {
//             duration: 2, ease: "linear", repeat: Infinity, stiffness: 200

//         }
//     },
// }

// const banner_left = {
//     initial: {
//         translateX: -300,
//         opacity: 0,
//     },
//     animate: {
//         translateX: 0,
//         opacity: 1,

//         transition: {
//             duration: 0.5,
//             delay: 1.4
//         }
//     }
// }

// const banner_right = {
//     initial: {
//         translateX: 800,
//         // opacity:0,
//     },
//     animate: {
//         translateX: 0,
//         opacity: 1,

//         transition: {
//             duration: 0.5,
//             delay: 1.4
//         }
//     }
// }

const FadeUp = {
    initial: {
        translateY: 100,
        opacity: 0
    },
    animate: {
        translateY: 0,
        opacity: 1,

        transition: {
            duration: 0.5,
            delay: 5.5
        }
    }
}
const FadeUp1 = {
    initial: {
        translateY: 100,
        opacity: 0
    },
    animate: {
        translateY: 0,
        opacity: 1,

        transition: {
            duration: 0.5,
            delay: 5.6
        }
    }
}
const FadeUp2 = {
    initial: {
        translateY: 100,
        opacity: 0
    },
    animate: {
        translateY: 0,
        opacity: 1,

        transition: {
            duration: 0.5,
            delay: 5.7
        }
    }
}

const BannerFadeUp = {
    initial: {
        translateY: 100,
        opacity: 0
    },
    animate: {
        translateY: 0,
        opacity: 1,

        transition: {
            duration: 0.5,
            delay: 5.8
        }
    }

}

  return (
    <div className="banner">
      <div className='banner_animation_container'>
        <motion.h1 variants={FadeUp} initial="initial" animate="animate">DEVELOPER</motion.h1>
        <motion.h1 variants={FadeUp1} initial="initial" animate="animate" >WEB DESIGNER</motion.h1>
      </div>
      <motion.h5  variants={FadeUp2} initial="initial" animate="animate" >BASED IN PUNE, INDIA</motion.h5>

      <motion.div variants={BannerFadeUp} initial="initial" animate="animate" className='banner_img_container'>
        <p>👨‍💻 I'M RISHIKESH </p>
        <img src={imageSrc} alt="Banner" className="banner-image" />
      </motion.div>
     
    </div>
  )
}

export default Banner;
