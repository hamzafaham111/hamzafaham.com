import React from "react";
import Image from "next/image";
// import WebIcon from "./Assets/services icons/website.png";
// import DesignIcon from "./Assets/services icons/design.png";
// import DocumentIcon from "./Assets/services icons/documentation.png";
import Style from "../../../styles/Services.module.css";
const Skills = () => {
  return (
    <>
      <div className="pb-32 md:pb-0 md:h-screen bg-black flex flex-col justify-center">
        <div className="flex flex-col">
          <span className="text-pink-600 font-bold">What I Know</span>
          <span className="text-gray-300 text-3xl font-bold">My Skills</span>
          <div className="flex">
            <div className="w-12 mr-1 mt-2 h-0 border border-b-4 border-pink-600"></div>
            <div className="w-2 mt-2 h-0 border border-b-4 border-pink-600"></div>
          </div>
        </div>

        <div className="sm:w-3/4 md:w-3/4 lg:w-2/4 mt-3 leading-none">
          <span className="text-gray-300">
            Given below are the skills that I have been working on for the past
            couple of years and I am confident that these technologies will
            fullfil your business needs.
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
          <div className="flex flex-row items-center justify-between bg-gray-800 p-2 border-l-4 border-gray-300 hover:border-pink-500 duration-500">
            <div className="flex flex-row items-center ">
            <snap>
              <Image src="/SkillsAssets/HTML.png"
              alt="image"
              height={25} width={25} />
            </snap>
            <snap className="text-gray-300 text-sm md:text-lg ml-1 font-bold">HTML</snap>
            </div>
            <snap className="text-sm text-orange-500 font-bold">9/10</snap>
          </div>

          <div className="flex flex-row items-center justify-between bg-gray-800 p-2 border-l-4 border-gray-300 hover:border-pink-500 duration-500">
            <div className="flex flex-row items-center ">
            <snap>
              <Image src="/SkillsAssets/CSS.png"
              alt="image"
              height={25} width={25} />
            </snap>
            <snap className="text-gray-300 text-sm md:text-lg ml-1 font-bold">CSS</snap>
            </div>
            <snap className="text-sm text-blue-500 font-bold">9/10</snap>
          </div>

          <div className="flex flex-row items-center justify-between bg-gray-800 p-2 border-l-4 border-gray-300 hover:border-pink-500 duration-500">
            <div className="flex flex-row items-center ">
            <snap>
              <Image src="/SkillsAssets/JS.png" alt="image" height={25} width={25} />
            </snap>
            <snap className="text-gray-300 text-sm md:text-lg ml-1 font-bold">Javascript</snap>
            </div>
            <snap className="text-sm text-yellow-500 font-bold">8/10</snap>
          </div>


          <div className="flex flex-row items-center justify-between bg-gray-800 p-2 border-l-4 border-gray-300 hover:border-pink-500 duration-500">
            <div className="flex flex-row items-center ">
            <snap>
              <Image src="/SkillsAssets/Bootstrap.png" alt="image" height={25} width={25} />
            </snap>
            <snap className="text-gray-300 text-sm md:text-lg ml-1 font-bold">Bootstrap</snap>
            </div>
            <snap className="text-sm text-violet-600 font-bold">8/10</snap>
          </div>


          <div className="flex flex-row items-center justify-between bg-gray-800 p-2 border-l-4 border-gray-300 hover:border-pink-500 duration-500">
            <div className="flex flex-row items-center ">
            <snap>
              <Image src="/SkillsAssets/React js.png" alt="image" height={25} width={25} />
            </snap>
            <snap className="text-gray-300 text-sm md:text-lg ml-1 font-bold">React js</snap>
            </div>
            <snap className="text-sm text-violet-700 font-bold">7/10</snap>
          </div>

          <div className="flex flex-row items-center justify-between bg-gray-800 p-2 border-l-4 border-gray-300 hover:border-pink-500 duration-500">
            <div className="flex flex-row items-center ">
            <snap>
              <Image src="/SkillsAssets/Node js.png" alt="image" height={25} width={25} />
            </snap>
            <snap className="text-gray-300 text-sm md:text-lg ml-1 font-bold">Node js</snap>
            </div>
            <snap className="text-sm text-emerald-600 font-bold">7/10</snap>
          </div>

          <div className="flex flex-row items-center justify-between bg-gray-800 p-2 border-l-4 border-gray-300 hover:border-pink-500 duration-500">
            <div className="flex flex-row items-center ">
            <snap>
              <Image src="/SkillsAssets/Express js.png" alt="image" height={25} width={25} />
            </snap>
            <snap className="text-gray-300 text-sm md:text-lg ml-1 font-bold">Express js</snap>
            </div>
            <snap className="text-sm text-gray-400 font-bold">7/10</snap>
          </div>

          <div className="flex flex-row items-center justify-between bg-gray-800 p-2 border-l-4 border-gray-300 hover:border-pink-500 duration-500">
            <div className="flex flex-row items-center ">
            <snap>
              <Image src="/SkillsAssets/MongoDB.png" alt="image" height={25} width={25} />
            </snap>
            <snap className="text-gray-300 text-sm md:text-lg ml-1 font-bold">MongoDB</snap>
            </div>
            <snap className="text-sm text-emerald-500 font-bold">7/10</snap>
          </div>

          <div className="flex flex-row items-center justify-between bg-gray-800 p-2 border-l-4 border-gray-300 hover:border-pink-500 duration-500">
            <div className="flex flex-row items-center ">
            <snap>
              <Image src="/SkillsAssets/MySQL.png" alt="image" height={25} width={25} />
            </snap>
            <snap className="text-gray-300 text-sm md:text-lg ml-1 font-bold">MySQL</snap>
            </div>
            <snap className="text-sm text-red-400 font-bold">7/10</snap>
          </div>

          <div className="flex flex-row items-center justify-between bg-gray-800 p-2 border-l-4 border-gray-300 hover:border-pink-500 duration-500">
            <div className="flex flex-row items-center ">
            <snap>
              <Image src="/SkillsAssets/Git.png" alt="image" height={25} width={25} />
            </snap>
            <snap className="text-gray-300 text-sm md:text-lg ml-1 font-bold">GitHub</snap>
            </div>
            <snap className="text-sm text-red-500 font-bold">7/10</snap>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
