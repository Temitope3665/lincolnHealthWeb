import React from "react";
import {
  cardiac,
  diagnose,
  emergencyClinic,
  rightIcon,
  stethoscope,
  surgery,
  vascular,
} from "../../assets/svg";

const SectionOne = () => {
  return (
    <div className="mb-4" data-aos="fade-up" data-aos-duration="1000">
      <div className="text-center mt-12 md:mt-28">
        <h2 className="text-dark text-xxxl leading-tight font-medium md:text-xlii">
          Our Medical Services
        </h2>
        <p className="text-sm mt-1 text-dark md:text-md md:px-10 lg:px-60">
          linColn is the voice of a unique approach in health care today, one
          that puts the patient at the center with plans and clinical teams
          collaborating to improve health outcomes and reduce costs.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 mt-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3">
        <div className="bg-cardLight p-8 rounded-2xl cursor-pointer card-btn drop-shadow-md">
          <div>{stethoscope}</div>
          <p className="text-dark text-extraMd font-medium mt-4 card-header">
            Primary Care
          </p>
          <p className="text-md mt-2 text-dark">
            linColn is the voice of a unique approach in health care today, one
            that puts the patient at the center with plans and clinical teams
            collaborating to improve health outcomes and reduce costs.
          </p>
          <div className="flex items-center mt-4 cursor-pointer">
            <p className="text-blue text-md">Learn more</p>
            <div className="ml-2">{rightIcon}</div>
          </div>
        </div>

        <div className="bg-cardLight p-8 rounded-2xl cursor-pointer card-btn drop-shadow-md">
          <div>{emergencyClinic}</div>
          <p className="text-dark text-extraMd font-medium mt-4 card-header">
            Emergency Clinic
          </p>
          <p className="text-md mt-2 text-dark">
            linColn is the voice of a unique approach in health care today, one
            that puts the patient at the center with plans and clinical teams
            collaborating to improve health outcomes and reduce costs.
          </p>
          <div className="flex items-center mt-4 cursor-pointer">
            <p className="text-blue text-md">Learn more</p>
            <div className="ml-2">{rightIcon}</div>
          </div>
        </div>

        <div className="bg-cardLight p-8 rounded-2xl cursor-pointer card-btn drop-shadow-md">
          <div>{cardiac}</div>
          <p className="text-dark text-extraMd font-medium mt-4 card-header">
            Cardiac Clinic
          </p>
          <p className="text-md mt-2 text-dark">
            linColn is the voice of a unique approach in health care today, one
            that puts the patient at the center with plans and clinical teams
            collaborating to improve health outcomes and reduce costs.
          </p>
          <div className="flex items-center mt-4 cursor-pointer">
            <p className="text-blue text-md">Learn more</p>
            <div className="ml-2">{rightIcon}</div>
          </div>
        </div>

        <div className="bg-cardLight p-8 rounded-2xl cursor-pointer card-btn drop-shadow-md">
          <div>{diagnose}</div>
          <p className="text-dark text-extraMd font-medium mt-4 card-header">
            Precise Diagnose
          </p>
          <p className="text-md mt-2 text-dark">
            linColn is the voice of a unique approach in health care today, one
            that puts the patient at the center with plans and clinical teams
            collaborating to improve health outcomes and reduce costs.
          </p>
          <div className="flex items-center mt-4 cursor-pointer">
            <p className="text-blue text-md">Learn more</p>
            <div className="ml-2">{rightIcon}</div>
          </div>
        </div>

        <div className="bg-cardLight p-8 rounded-2xl cursor-pointer card-btn drop-shadow-md">
          <div>{surgery}</div>
          <p className="text-dark text-extraMd font-medium mt-4 card-header">
            General Surgery
          </p>
          <p className="text-md mt-2 text-dark">
            linColn is the voice of a unique approach in health care today, one
            that puts the patient at the center with plans and clinical teams
            collaborating to improve health outcomes and reduce costs.
          </p>
          <div className="flex items-center mt-4 cursor-pointer">
            <p className="text-blue text-md">Learn more</p>
            <div className="ml-2">{rightIcon}</div>
          </div>
        </div>

        <div className="bg-cardLight p-8 rounded-2xl cursor-pointer card-btn drop-shadow-md">
          <div>{vascular}</div>
          <p className="text-dark text-extraMd font-medium mt-4 card-header">
            Vascular Surgery
          </p>
          <p className="text-md mt-2 text-dark">
            linColn is the voice of a unique approach in health care today, one
            that puts the patient at the center with plans and clinical teams
            collaborating to improve health outcomes and reduce costs.
          </p>
          <div className="flex items-center mt-4 cursor-pointer">
            <p className="text-blue text-md">Learn more</p>
            <div className="ml-2">{rightIcon}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
