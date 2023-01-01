import Image from "next/image";
import React from "react";
// import SHImage from "./Assets/sh.jpg";
// import Two from "./Assets/R.jpeg";
// import Three from "./Assets/3.jpeg";
// import Four from "./Assets/4.jpg";
// import Five from "./Assets/5.jpg";
// import Six from "./Assets/6.jpg";

const Portfolio = () => {
  return (
    <>
      <div className="px-8 sm:px-16 md:px-32 md:h-screen flex flex-col justify-center">
        <div className="flex flex-col items-start sm:w-3/4 md:w-3/4 lg:w-2/4">
          <span className="text-pink-600 font-bold h-5">What I have Done</span>
          <spa className="text-3xl font-bold text-gray-300">My Portfolio</spa>
          {/* bottom border */}
          <div className="flex">
            <div className="w-12 mr-1 mt-2 h-0 border border-b-4 border-pink-600"></div>
            <div className="w-2 mt-2 h-0 border border-b-4 border-pink-600"></div>
          </div>
          <span className="text-gray-300 mt-2 leading-none mt-4 mb-4">
            Given below are the projects I have done in different nechs for
            clients. some of them are very recent while others are for my older
            clients.
          </span>
          <div className="text-gray-300 flex flex-row mt-2">
            <span className="px-3 bg-gray-900 rounded-xl mr-1 text-gray-300 font-bold text-center text-sm cursor-pointer flex items-center ">
              All
            </span>
            <span className="px-3 bg-gray-800 rounded-xl mr-1 text-gray-500 font-bold text-sm cursor-pointer text-center flex items-center">
              Web Dev
            </span>
            <span className="px-3 bg-gray-800 rounded-xl mr-1 text-gray-500 font-bold text-sm cursor-pointer text-center flex items-center">
              UI/UX
            </span>
            <span className="px-3 bg-gray-800 rounded-xl mr-1 text-gray-500 font-bold text-sm cursor-pointer text-center flex items-center">
              Mob App
            </span>
            <span className="px-3 bg-gray-800 rounded-xl mr-1 text-gray-500 font-bold text-sm cursor-pointer text-center flex items-center">
              Docs
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white mt-8">
          <div className="text-gray-300 h-50 cursor-pointer">
            <Image
              src="/PortfolioAssets/3.jpeg"
              className="h-full w-full object-fill"
              alt="Image"
              height={800}
              width={800}
            />
          </div>
          <div className="text-gray-300 h-44 cursor-pointer">
            <Image
              src="/PortfolioAssets/R.jpeg"
              className="h-full w-full object-fill"
              alt="Image"
              height={800}
              width={800}
            />
          </div>
          <div className="text-gray-300 h-44 cursor-pointer">
            <Image
              src="/PortfolioAssets/3.jpeg"
              className="h-full w-full object-fill"
              alt="Image"
              height={800}
              width={800}
            />
          </div>
          <div className="text-gray-300 h-44 cursor-pointer">
            <Image
              src="/PortfolioAssets/4.jpg"
              className="h-full w-full object-fill"
              alt="Image"
              height={800}
              width={800}
            />
          </div>
          <div className="text-gray-300 h-44 cursor-pointer">
            <Image
              src="/PortfolioAssets/5.jpg"
              className="h-full w-full object-fill"
              alt="Image"
              height={800}
              width={800}
            />
          </div>
          <div className="text-gray-300 h-44 cursor-pointer">
            <Image
              src="/PortfolioAssets/6.jpg"
              className="h-full w-full object-fill"
              alt="Image"
              height={800}
              width={800}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
