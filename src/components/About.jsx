import React from 'react'
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import {motion} from "framer-motion";

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
     <h1 className='my-5 text-center text-2xl'>About <span className='text-neutral-500'>Me</span> 
     </h1>
    <div className='flex flex-wrap lg:flex-nowrap items-center justify-end'>
         <motion.div
         whileInView={{opacity: 1, x: 0}}
         initial={{opacity: 0, x: -100}}
         transition={{duration: 0.5}} 
         className='lg:w-1/2 lg:pl-4 flex justify-center lg:justify-end mr-10'>
            <img
              src={aboutImg}
              alt='about'
              className='w-60 h-60 lg:w-80 lg:h-80 max-w-full rounded-lg'
            />
          </motion.div>
          <motion.div
          whileInView={{opacity: 1, x:0}}
          initial={{opacity: 0, x: 100}} 
          transition={{duration: 0.5}}
          className='lg:w-1/2 mx-3 my-2 lg:pl-4 flex justify-center lg:justify-start mr-10'>
            <p className='lg:mx-3 lg:my-4 max-w-xs py-10 text-sm font-light leading-tight text-left'>{ABOUT_TEXT}</p>
          </motion.div>
          </div>
          
        </div>
     
  )
}

export default About
