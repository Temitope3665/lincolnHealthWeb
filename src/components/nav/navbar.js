import React, { useState } from "react";
import { close, hamburger, logo, navLine } from "../../assets/svg";
import { Link } from "react-router-dom";
import SmallScreenNav from "./smallScreenNav";

const NavBar = () => {
  const [openNavBar, setOpenNavBar] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between text-dark text-sm font-medium">
        <Link to="/">
          <div className="pl-20px">{logo}</div>
        </Link>

        <div className="lg:hidden md:flex sm:hidden">
          <div
            onClick={() => setOpenNavBar(!openNavBar)}
            className={!openNavBar ? "hidden" : "flex"}
          >
            {close}
          </div>
          {!openNavBar && (
            <div
              className={openNavBar ? "hidden" : "flex"}
              onClick={() => setOpenNavBar(!openNavBar)}
            >
              {hamburger}
            </div>
          )}
        </div>

        <ul className="items-center space-x-16 cursor-pointer nav-links lg:flex hidden md:hidden sm:flex">
          <Link to="/">
            <li className="duration-1000 ease-in-out hover:text-blue nav-anime">
              Home
              <div className="slide"></div>
            </li>
          </Link>
          <li className="duration-1000 ease-in-out hover:text-blue nav-anime">
            Our Services
            <div className="slide"></div>
          </li>
          <li className="duration-1000 ease-in-out hover:text-blue nav-anime">
            Find a Doctor
            <div className="slide"></div>
          </li>
          <li className="duration-1000 ease-in-out hover:text-blue nav-anime">
            How it Works
            <div className="slide"></div>
          </li>
          <li className="duration-1000 ease-in-out hover:text-blue nav-anime">
            Contact Us
            <div className="slide"></div>
          </li>
        </ul>
        <div className="justify-evenly items-center space-x-3 cursor-pointer lg:flex hidden md:hidden sm:flex">
          <div className="duration-1000 ease-in-out hover:text-blue nav-anime">
            <Link to="/signup">
              Register
              <div className="slide"></div>
            </Link>
          </div>
          <div>{navLine}</div>
          <div>
            <div className="duration-1000 ease-in-out hover:text-blue nav-anime">
              <Link to="/login">
                Login
                <div className="slide"></div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <>{openNavBar && <SmallScreenNav />}</>
    </>
  );
};

export default NavBar;
