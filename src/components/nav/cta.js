import React from 'react'
import { rightArrWhite } from '../../assets/svg';

const Cta = () => {
  return (
    <div className='mt-20 text-center text-dark' data-aos="fade-up" data-aos-duration="1000">
        <p className='font-medium'>Need a Doctor for Check-up?</p>
        <h1 className='font-medium text-xxxl md:text-xxl px-0 md:px-20 sm:px-60 leading-tight mt-6'>Just make an appointment and you&apos;re done!</h1>
        <button className='bg-blue text-white border px-14 mt-6 py-4 rounded-lg hover:text-blue button-blue border-blue'>
            <div className='flex items-center'>
                <p>Get Appointment</p>
                <div className='ml-2'>{rightArrWhite}</div>
            </div>
        </button>
    </div>
  );
};

export default Cta;
