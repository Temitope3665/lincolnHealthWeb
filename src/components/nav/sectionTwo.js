/* eslint-disable @next/next/no-img-element */
import React from 'react';
import SectionTwoImg from '../../assets/Images/sectionHeader.svg';
import { commitment, experience } from '../../assets/svg';

const SectionTwo = () => {
  return (
    <div className='flex flex-col mt-20 justify-between items-center md:flex md:mt-20 md:justify-between md:items-center md:flex-col lg:flex-row' data-aos="fade-up" data-aos-duration="1000">
        <div className='w-full md:w-full md:mx-auto sm:w-2/4'>
            <img className='md:mx-auto md:my-0' src={SectionTwoImg} alt="img_bg" />
        </div>
        <div className='text-center mt-10 text-xxxl leading-tight md:mt-20 md:ml-0 sm:ml-32 w-full md:w-full sm:w-2/4'>
          <h3 className='text-xi text-dark font-medium text-center md:text-center lg:text-left'>
            What Makes <span className='text-blue font-bold'>linColn </span>
            Health Services Unique?</h3>
            <div className='mt-10'>
              <div className='flex flex-col sm:flex sm:flex-row sm:items-center'>
                <div className='mx-auto md:mx-0 mb-2 md:mb-0'>
                  {experience}
                </div>
                <div className='ml-0 text-dark text-center md:text-left md:ml-10'>
                  <p className='font-bold text-lg mb-2'>Our Experience</p>
                  <p className='text-md pr-0 md:pr-14'>linColn is the voice of a unique approach in health care today, one that puts the patient at the center.</p>
                </div>  
              </div>

              <div className='flex flex-col mt-8 md:flex md:flex-row md:items-center'>
              <div className='mx-auto md:mx-0 mb-2 md:mb-0'>
                {commitment}
              </div>
                <div className='ml-0 text-dark text-center md:text-left md:ml-10'>
                  <p className='font-bold text-lg mb-2'>Caring Commitment</p>
                  <p className='text-md pr-0 md:pr-14'>linColn is the voice of a unique approach in health care today,<br/>one that puts the patient at the center.</p>
                </div>  
              </div>

              <div className='flex flex-col mt-8 md:flex md:flex-row md:items-center'>
              <div className='mx-auto md:mx-0 mb-2 md:mb-0'>
                {commitment}
              </div>
                <div className='ml-0 text-dark text-center md:text-left md:ml-10'>
                  <p className='font-bold text-lg mb-2'>Great Facilities</p>
                  <p className='text-md pr-0 md:pr-14'>linColn is the voice of a unique approach in health care today,<br/>one that puts the patient at the center.</p>
                </div>  
              </div>
            </div>
        </div>
        <div></div>
    </div>
  )
};

export default SectionTwo;
