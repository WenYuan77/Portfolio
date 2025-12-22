import React from 'react';
import SectionTitle from './SectionTitle';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className='bg-white py-12 sm:py-16 md:py-20' id='contact'>
      <div className='align-element'>
        <SectionTitle text='Contact' />
        
        <div className='mt-8 sm:mt-12 md:mt-16 flex flex-col items-center'>
          {/* Phone */}
          <div className='flex items-center gap-4 mb-6 sm:mb-8 group'>
            <FaPhone className='h-6 w-6 sm:h-7 sm:w-7 text-lime-600' />
            <a 
              href='tel:+14255455821' 
              className='font-body text-base sm:text-lg md:text-xl text-slate-700 hover:text-lime-600 transition-colors duration-300'
            >
              425-545-5821
            </a>
          </div>

          {/* Email */}
          <div className='flex items-center gap-4 mb-8 sm:mb-10 md:mb-12 group'>
            <FaEnvelope className='h-6 w-6 sm:h-7 sm:w-7 text-lime-600' />
            <a 
              href='mailto:vinyuan77@outlook.com' 
              className='font-body text-base sm:text-lg md:text-xl text-slate-700 hover:text-lime-600 transition-colors duration-300 break-all'
            >
              vinyuan77@outlook.com
            </a>
          </div>

          {/* Social Media Icons */}
          <div className='flex gap-6 sm:gap-8 items-center'>
            <a 
              href="https://www.linkedin.com/in/wenyuan77" 
              className="transition-transform hover:scale-110 duration-300"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin className='h-7 w-7 sm:h-8 sm:w-8 text-slate-500 hover:text-slate-900 duration-300'/>
            </a>
            <a 
              href="https://github.com/WenYuan77?tab=repositories" 
              className="transition-transform hover:scale-110 duration-300"
              aria-label="GitHub profile"
            >
              <FaGithubSquare className='h-7 w-7 sm:h-8 sm:w-8 text-slate-500 hover:text-slate-900 duration-300'/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

