/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from "react-carousel-minimal";
import { CarouselImgData } from "../../utils/data/carouselData";

const Hero = () => {
  return (
    <div
      className="mt-10 flex items-center justify-between relative lg:flex-row flex-col md:flex-col sm:flex-row sm:mx-0"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="w-full sm:w-2/4 md:w-full lg:w-2/4 lg:text-left md:text-center">
        <h1 className="text-xi text-center font-poppins font-black text-dark lg:text-left md:text-xxl sm:text-left md:text-center">
          A family of hospitals
          <br /> for your family
        </h1>
        <p className="text-dark mt-4 text-sm text-center lg:text-left md:text-left md:text-md">
          linColn is the voice of the unique approach in health care today, one
          that puts the patient at the center with plans and clinical teams
          collaborating to improve health outcomes and reduce costs.
        </p>
        <div className="mt-8 justify-center md:mt-12">
          <button className="bg-blue text-white px-10 py-4 rounded-full font-medium text-sm hover:text-blue border-blue border-2 button-blue w-full md:w-fit">
            Get Appointment
          </button>
          <button className="bg-none border-blue border-2 text-blue px-12 py-4 rounded-full font-medium text-sm hover:bg-blue hover:text-white button-light mt-8 ml-0 md:mt-0 md:ml-8 w-full md:w-fit">
            Specialists
          </button>
        </div>
      </div>
      <div className="z-0">
        <Carousel
          data={CarouselImgData}
          time={3000}
          width="850px"
          height="500px"
          automatic={true}
          slideBackgroundColor="transparent"
          slideImageFit="cover"
        />
      </div>
    </div>
  );
};

export default Hero;
