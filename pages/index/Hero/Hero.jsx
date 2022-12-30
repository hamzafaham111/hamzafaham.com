import React from "react";
import MyImage from "./Assets/MyImage1.jpg";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div className="h-screen px-8 sm:px-16 md:px-32 flex flex-col-reverse md:flex-row items-center justify-center">
        <div className=" text-gray-300 flex flex-col md:pr-20">
          <span className="font-bold text-2xl">Hi, I'm</span>
          <span className="font-bold text-3xl md:text-5xl text-pink-600">
            Hamza Faham
          </span>
          <span className="font-bold text-xl">A Software Engineer</span>
          <div>
            <button className="border-2 border-pink-600 text-gray-300 mt-8 py-2 w-40 rounded-sm font-bold">
              Learn More
            </button>
            {/* <button className="border-2 border-pink-600 text-gray-300 mt-8 py-2 w-40 rounded-sm font-bold">
              WhatsaApp
            </button> */}
          </div>
        </div>
        <div className="">
          <Image
            className="object-cover"
            style={{ height: "500px" }}
            src={MyImage}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
