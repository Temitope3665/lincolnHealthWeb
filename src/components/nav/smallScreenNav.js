import React from 'react'
import { Link } from 'react-router-dom';

const SmallScreenNav = () => {
  return (
    <div className='min-h-screen w-full duration-700 ease-in-out stactic mt-8' data-aos="zoom-in-up">
      <ul className="items-center cursor-pointer nav-links">
        <Link to="/">
          <li className="duration-1000 ease-in-out hover:text-blue nav-anime">
            Home
            <div className="slide"></div>
          </li>
        </Link>
        <li className="duration-1000 mt-4 ease-in-out hover:text-blue nav-anime">
          Our Services
          <div className="slide"></div>
        </li>
        <li className="duration-1000 mt-4 ease-in-out hover:text-blue nav-anime">
          Find a Doctor
          <div className="slide"></div>
        </li>
        <li className="duration-1000 mt-4 ease-in-out hover:text-blue nav-anime">
          How it Works
          <div className="slide"></div>
        </li>
        <li className="duration-1000 mt-4 ease-in-out hover:text-blue nav-anime">
          Contact Us
          <div className="slide"></div>
        </li>
      </ul>

      <div className='mt-8 justify-center md:mt-12'>
        <Link to="/signup">
          <button className='bg-blue text-white px-10 py-4 rounded-full font-medium text-sm hover:text-blue border-blue border-2 button-blue w-full md:w-fit'>
              Create Account
          </button>
        </Link>
        <Link to="/signup">
          <button className='bg-none border-blue border-2 text-blue px-12 py-4 rounded-full font-medium text-sm hover:bg-blue hover:text-white button-light mt-8 ml-0 md:mt-0 md:ml-8 w-full md:w-fit'>
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SmallScreenNav;
