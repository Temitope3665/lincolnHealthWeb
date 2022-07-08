import React from 'react'
import { facebook, instagram, linkedin, logo, twitter } from '../../assets/svg';

const Footer = () => {
  return (
    <div className='bg-white mt-16 px-8 md:px-0' data-aos="fade-up" data-aos-duration="1000">
        <div className='container mx-auto p-5 mt-8 md:flex md:flex-row md:justify-around w-full text-dark leading-8'>
            <div className='w-full md:w-1/4'>
                <div>{logo}</div>
                <p className='text-md'>
                    linColn is the voice of a unique approach in health care today, one that puts the 
                    patient at the center with plans and clinical teams collaborating to improve health
                    outcomes and reduce costs.
                </p>
                <div className='flex mt-6'>
                    <div className='mr-3'>{facebook}</div>
                    <div className='mr-3'>{linkedin}</div>
                    <div className='mr-3'>{twitter}</div>
                    <div className='mr-3'>{instagram}</div>
                </div>
            </div>
            <div className='w-full md:w-1/4 ml-0 md:ml-10 lg:ml-40'>
                <p className='font-bold mt-3'>Services</p>
                <ul className='list-none mt-2 text-md'>
                    <li>Primary Care</li>
                    <li>Emergency Clinic</li>
                    <li>Cardiac Clinic</li>
                    <li>Precise Diagnosis</li>
                    <li>General Surgery</li>
                    <li>Vascular Surgery</li>
                </ul>
            </div>
            <div className='w-full md:w-1/4'>
                <p className='font-bold mt-3'>Support</p>
                <ul className='list-none mt-2 text-md'>
                    <li>Find a Doctor</li>
                    <li>How it Works</li>
                    <li>Book Appointment</li>
                    <li>Register</li>
                    <li>FAQ</li>
                    <li>Terms of Use</li>
                </ul>
            </div>
            <div className='w-full md:w-1/4'>
                <p className='font-bold mt-3'>Contact Us</p>
                <ul className='list-none mt-2 text-md'>
                   <li>+(234) 813 665 3463</li>
                   <li>aroyewontope@gmail.com</li>
                   <li>No. 14, Itanola Drive Ajao Estate, Lagos</li>
                </ul>
            </div>
        </div>

        <div className='nt-2 md:mt-8 pb-8 container mx-auto'>
            <div className='border border-lightGrey'></div>
            <p className='text-center font-normal text-md mt-4'>
                2022 &#169; Empirical. All Rights Reserved.
            </p>
        </div>

    </div>
  );
};

export default Footer;
