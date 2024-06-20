import React from "react";
// import MyImage from "./Assets/MyImage1.jpg";
import Image from "next/image";
const Hero = () => {
  const handleDownload = () => {
    // Replace 'path/to/resume.pdf' with the actual path to your PDF resume
    const resumePath = 'Hamza_Faham_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Hamza_Faham_Resume.pdf';
    link.click();
  };
  return (
    <>
      <div className=" h-screen px-4 sm:px-8 md:px-32  flex flex-col-reverse md:flex-row items-center justify-center">
        <div className=" text-gray-300 flex flex-col md:pr-20">
          <span className="font-bold text-2xl">Hi, I'm</span>
          <span className="font-bold text-3xl md:text-5xl text-pink-600">
            Hamza Faham
          </span>
          <span className="font-bold text-xl">A Software Engineer</span>
          <div className="flex flex-row">
            <button className="border-2 border-pink-600 bg-pink-600 text-gray-300 mt-8 py-2 w-40 rounded-sm font-bold mr-2">
              Contact Me
            </button>
            <button onClick={handleDownload} className="border-2 border-pink-600 hover:bg-pink-600 duration-100 text-gray-300 mt-8 py-2 w-40 rounded-sm font-bold">
              Download Resume
            </button>
            {/* <button className="border-2 border-pink-600 text-gray-300 mt-8 py-2 w-40 rounded-sm font-bold">
              WhatsaApp
            </button> */}
          </div>
        </div>
        <div className="">
          <Image
            className="object-cover"
            src="/HeroAssets/MyImage1.jpg"
            width={450}
            height={450}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
