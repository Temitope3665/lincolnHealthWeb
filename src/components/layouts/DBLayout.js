import React from "react";
import { call, location } from "../../assets/svg";

const DBLayout = ({ children }) => {
  return (
    <>
      <div className="bg-blue p-4 text-white text-center block sm:justify-center md:flex md:justify-around text-sm">
        <p>Your best pharmacy for proper treatment and store !</p>
        <div className="flex justify-center sm:flex-col md:flex-row md:mx-0">
          <div className="flex">
            <div>{call}</div>
            <p className="font-bold ml-2 cursor-pointer">+2348136653463</p>
          </div>
          <div className="flex ml-4">
            <div>{location}</div>
            <p className="cursor-pointer">View our locations</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-5 px-8 md:px-14">{children}</div>
    </>
  );
};

export default DBLayout;
