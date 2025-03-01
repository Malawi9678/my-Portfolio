import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/yashProf2.jpg';
import { motion } from "framer-motion";

const container = (delay) =>({
  hidden: {x: -100, opacity: 0},
  visible: {x: 0,
            opacity:1,
            transition:{duration: 0.5, delay: delay},
  },
});

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 mx-1 lg:mx-8 lg:pb-35'>
      <div className='flex flex-wrap lg:flex-nowrap items-center'>
        {/* Text and Image Section */}
        <div className='w-full flex flex-col lg:flex-row items-start justify-between'>
          {/* Left - Text Content */}
          <div className='w-full lg:w-1/2 mb-4 mx-10 lg:mb-0'>
            <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
              className='pb-2 lg:pb-8 lg:text-4xl text-2xl font-thin tracking-tight lg:mt-10'>
              Yashpal Malawi
            </motion.h1>
            <motion.span
             variants={container(0.5)}
             initial="hidden"
             animate="visible"
              className='bg-gradient-to-r from-pink-300 via-slate-500
              to-purple-500 bg-clip-text text-lg lg:text-2xl tracking-tight text-transparent'
            >
              Full Stack Developer
            </motion.span>
            <motion.p 
             variants={container(1)}
             initial="hidden"
             animate="visible"
            className='lg:my-3 mx-3 lg:py-2 font-light tracking-tighter text-sm text-left'>
              {HERO_CONTENT}
            </motion.p>
          </div>

          {/* Right - Profile Image */}
          <div className='w-full mx-2 lg:w-1/2 lg:pl-4 flex justify-center lg:justify-end'>
            <motion.img
            initial={{x: 100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 1, delay: 1.2}}
              src={profilePic}
              alt='Kevin Rush'
              className='w-60 h-60 lg:w-80 lg:h-60 max-w-full rounded-lg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
