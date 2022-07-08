/* eslint-disable @next/next/no-img-element */
import React from "react";
import ImageOne from "../../assets/Images/imgOne.jpeg";
import ImageTwo from "../../assets/Images/imgTwo.jpeg";
import ImageThree from "../../assets/Images/imgThree.jpeg";
import BookAppoitmentForm from "../forms/bookAppoitmentForm";

const FormSection = () => {
  return (
    <div
      className="mt-20 bg-white rounded-3xl drop-shadow-md flex flex-col md:items-center md:flex md:flex-col md:text-center lg:items-center lg:flex lg:flex-row h-fit py-8"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="text-dark w-full md:w-full sm:w-1/2 p-10 md:p-20">
        <p className="font-medium text-sm md:text-md">
          Need emergency advice from our Doctors?
        </p>
        <h1 className="text-xl md:text-xxl font-medium leading-tight mt-4">
          Request a Call Back Today Now!
        </h1>
        <p className="font-medium text-sm md:text-md mt-4">
          We will make a single attempt to contact you from a with held number,
          usually within 24 hours of your request.
        </p>
        <div className="mt-10 md:mt-16 md:flex md:flex-row items-center">
          <div className="flex mr-6">
            <div className="rounded-full border-4 border-white bg-blue drop-shadow-sm w-16 h-16">
              <img
                className="w-full object-cover h-full rounded-full"
                src={ImageOne}
                alt="img"
              />
            </div>
            <div className="rounded-full border-4 border-white bg-blue drop-shadow-sm w-16 h-16 -ml-4">
              <img
                className="w-full object-cover h-full rounded-full"
                src={ImageTwo}
                alt="img"
              />
            </div>
            <div className="rounded-full border-4 border-white bg-blue drop-shadow-sm w-16 h-16 -ml-4">
              <img
                className="w-full object-cover h-full rounded-full"
                src={ImageThree}
                alt="img"
              />
            </div>
          </div>
          <p className="text-sm md:text-md font-medium">
            The quickest way to get in contact is to telephone number +(234) 813
            665 3463
          </p>
        </div>
      </div>
      <div className="w-full md:w-full md:ml-0 md:flex md:justify-center sm:w-1/2 sm:ml-12 px-6 md:px-0">
        <BookAppoitmentForm />
      </div>
    </div>
  );
};

export default FormSection;
