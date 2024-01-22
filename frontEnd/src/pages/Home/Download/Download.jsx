import React from "react";
import mobile from "./mobile.png";
import leftImage from "./left-image.png";
import rightImage from "./right-image.png";
import downloadIcon1 from "./download-icon1.png";
import downloadIcon2 from "./download-icon2.png";

const DownloadSection = () => {
  return (
    <div className="">
      <div className=" flex md:hidden  flex-col justify-center items-center">
        <img src={mobile} alt="Left" className="w-60 h-auto" />
      </div>
      <div className="flex md:h-[370px] lg:h-[500] items-center justify-around bg-[#8DADE1] mx-6 my-2 md:my-10 lg:my-14 rounded-md">
        {/* Left Image */}
        <div className=" hidden md:block">
          <img src={leftImage} alt="Left" className="md:w-64 lg:w-80 h-auto" />
        </div>

        {/* Center Content */}
        <div className=" mt-4 md:mt-0 flex flex-col gap-2 items-center justify-center ">
          <h2 className=" text-xl md:text-3xl lg:text-4xl text-center font-semibold mb-2 text-black">
            DOWNLOAD OUR APPS
          </h2>
          <p className="text-black text-center mb-4">
            To Get Better Experience
            <br />
            In Your Mobile Device
          </p>

          {/* Download Icons */}
          <div className="flex gap-2 items-center justify-center mb-4">
            <img
              src={downloadIcon1}
              alt="Download 1"
              className="w-20 md:w-32 lg:w-64 hover:cursor-pointer"
            />
            <img
              src={downloadIcon2}
              alt="Download 2"
              className="w-20 md:w-32 lg:w-64 hover:cursor-pointer"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className=" hidden md:block">
          <img
            src={rightImage}
            alt="Right"
            className="w-40 md:w-48 lg:w-56 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
