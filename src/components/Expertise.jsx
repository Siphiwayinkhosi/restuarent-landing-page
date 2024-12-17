import React from 'react';
import { CUSINES } from "../constants";
import { motion } from 'framer-motion';

export const Expertise = () => {
  return (
    <section id='expertise'>
      <h2 className='my-8 text-center text-3xl tracking-tighter lg:text-4xl'>Our Expertise</h2>
      <div className='container mx-auto px-4'>
        {CUSINES.map((cuisine, index) => (
          <div key={index} className='flex items-center border-b-4 border-dotted border-neutral-700/40 py-2'>
            <div className='flex-shrink-0 pr-8 text-2xl'>
              {cuisine.number}
            </div>
            <div className='w-1/3 flex-shrink-0'>
              <img 
                src={cuisine.image} 
                alt={cuisine.title} 
                className='h-auto rounded-3xl'
              />
            </div>
            <div className='pl-8'>
              <h3 className='text-2xl uppercase tracking-tighter text-rose-300'>
                {cuisine.title}
              </h3>

              {/* Motion for paragraph */}
              <motion.p
                className='mt-4 text-lg tracking-tighter'
                initial={{ opacity: 0, wordSpacing: '20px' }}  // Separate words at the start
                whileInView={{ opacity: 1, wordSpacing: '0px' }}  // Come closer when in view
                exit={{ opacity: 0, wordSpacing: '20px' }}  // Spread apart on exit
                transition={{ duration: 1 }}
              >
                {cuisine.description}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
