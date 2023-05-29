import React from "react";
import Image from "next/image";
// import WebIcon from "./Assets/services icons/website.png";
// import DesignIcon from "./Assets/services icons/design.png";
// import DocumentIcon from "./Assets/services icons/documentation.png";
const Services = () => {
  return (
    <>
      <div className="py-40 md:py-0 px-4 sm:px-8 md:px-32 md:h-screen bg-black flex flex-col justify-center">
        <div className="flex flex-col">
          <span className="text-pink-600 font-bold">What I Do</span>
          <span className="text-gray-300 text-3xl font-bold">My Services</span>
          <div className="flex">
            <div className="w-12 mr-1 mt-2 h-0 border border-b-4 border-pink-600"></div>
            <div className="w-2 mt-2 h-0 border border-b-4 border-pink-600"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
          <div className="bg-gray-900 hover:bg-pink-900 cursor-pointer h-44 flex flex-col p-4 hover:pt-2 transition duration-500 ease-in-out">
            <Image
              src="/ServicesAssets/Icons/website.png"
              height={30}
              width={30}
            />
            <span className="text-gray-300 font-bold my-2">
              Web Development
            </span>
            <span className="text-gray-300 text-xs sm:text-sm leading-4 overflow-auto">
              I am a full-stack web developer having 2 years of experience in
              MERN stack.
            </span>
          </div>
          <div className="bg-gray-900 border-pink-600 hover:bg-pink-900 cursor-pointer h-44 flex flex-col p-4 hover:pt-2 transition duration-500 ease-in-out">
            <Image
              src="/ServicesAssets/Icons/design.png"
              height={30}
              width={30}
            />
            <span className="text-gray-300 font-bold my-2">UI/UX Design</span>
            <span className="text-gray-300 text-xs sm:text-sm leading-4 overflow-auto">
              UI/UX design refers to the process of designing the user interface
              of a product.
            </span>
          </div>
          <div className="bg-gray-900 border-pink-600 hover:bg-pink-900 cursor-pointer h-44 flex flex-col p-4 hover:pt-2 transition duration-500 ease-in-out">
            <Image
              src="/ServicesAssets/Icons/system-design.png"
              height={30}
              width={30}
            />
            <span className="text-gray-300 font-bold my-2">System Design</span>
            <span className="text-gray-300 text-xs sm:text-sm leading-4 overflow-auto">
              I have been providing system design services (HLD & LLD) for the
              past 2 years as a freeancer.
            </span>
          </div>
          <div className="bg-gray-900 border-pink-600 hover:bg-pink-900 cursor-pointer h-44 p-4 flex flex-col hover:pt-2 transition duration-500 ease-in-out">
            <Image
              src="/ServicesAssets/Icons/documentation.png"
              height={30}
              width={30}
            />
            <span className="text-gray-300 font-bold my-2">Documentation</span>
            <span className="text-gray-300 text-xs sm:text-sm leading-4 overflow-auto">
              I can make your project documentation and project report, I have 2
              years of experience in it. with less then 10% of plagerisem
            </span>
          </div>
          <div className="bg-gray-900 border-pink-600 hover:bg-pink-900 cursor-pointer h-44 p-4 flex flex-col hover:pt-2 transition duration-500 ease-in-out">
            <Image
              src="/ServicesAssets/Icons/deployment.png"
              height={30}
              width={30}
            />
            <span className="text-gray-300 font-bold my-2">Deployment</span>
            <span className="text-gray-300 text-xs sm:text-sm leading-4 overflow-auto">
              I am a full-stack web developer having 2 years of experience in
              MERN stack.
            </span>
          </div>
          {/* <div className="bg-gray-900 border-pink-600 hover:bg-pink-900 cursor-pointer h-44 p-4 flex flex-col hover:pt-2 transition duration-500 ease-in-out">
            <Image
              src="/ServicesAssets/Icons/documentation.png"
              height={30}
              width={30}
            />
            <span className="text-gray-300 font-bold my-2">Documentation</span>
            <span className="text-gray-300 text-sm leading-4">
              I am a full-stack web developer having 2 years of experience in
              MERN stack.
            </span>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Services;
