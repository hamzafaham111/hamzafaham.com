import React from "react";
import Image from "next/image";
const AboutMe = () => {
  return (
    <>
      <div className="pt-32 pb-32 md:pb-0 md:pt-0 h-auto md:h-screen px-8 sm:px-16 md:px-32 bg-black flex items-center justify-center flex-col md:flex-row">
        <div className="border">
          <div
            className="
          border-solid border-pink-600 border-4"
          >
            <Image
              src="/AboutAssets/MyImage1.jpg"
              width="300"
              height="300"
              className="border-solid border-gray-300 border-4 md:-ml-8 md:-mt-8 md:mb-8"
            />
          </div>
        </div>
        <div className="md:ml-12 pt-10 md:pt-0">
          <span className="text-3xl text-gray-300 font-bold">About Me</span>
          {/* bottom border */}
          <div className="flex">
            <div className="w-12 mr-1 mt-2 h-0 border border-b-4 border-pink-600"></div>
            <div className="w-2 mt-2 h-0 border border-b-4 border-pink-600"></div>
          </div>
          <p className="text-gray-300 mt-2 w-62 sm:w-80 md:w-96 leading-none">
            I'm Hamza Faham from Lahore, Paksitan. I am a software engineer
            having 2 years of experience in full stack web development. I have
            been working on some advance web designing and development tools.
          </p>
          <div className="mt-4">
            <button className="border border-pink-600 px-5 py-2 bg-pink-600 text-gray-300 font-bold rounded-sm">
              Download Resume
            </button>
            <button className="border-2 border-pink-600 px-5 py-2 text-pink-600 font-bold mt-1 ml-1 md:ml-4 rounded-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
