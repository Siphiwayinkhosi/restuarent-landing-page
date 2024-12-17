import React from 'react';
import about from "../assets/about.jpeg";
import { ABOUT } from '../constants';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section className='container mx-auto mb-8' id='about'>
      <h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl'>About Us</h2>
      <div className='flex flex-wrap'>
        <div className='w-full p-4 lg:w-1/2'>
          <motion.img 
            src={about} 
            className='rounded-3xl lg:rotate-3'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className='w-full px-2 lg:w-1/2'>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl tracking-tighter lg:text-6xl'
          >
            {ABOUT.header}
          </motion.h2>
          <div className='mb-8 mt-1 h-2 w-36 bg-rose-300 lg:rotate-3'></div>
          
          {/* Motion for paragraph */}
          <motion.p 
            className='m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl'
            initial={{ opacity: 0, x: 100 }}  // Start from right
            whileInView={{ opacity: 1, x: 0 }}  // Animate to normal position
            transition={{ duration: 1, delay: 0.4 }}  // Set duration and delay
          >
            {ABOUT.content}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
