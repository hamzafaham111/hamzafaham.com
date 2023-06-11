import React from "react";
// import Image from "next/image";
// import InstaIcon from "./index/Assets/icons/instagram.svg";
// import TwitterIcon from "./index/Assets/icons/twitter.svg";
// import FBIcon from "./index/Assets/icons/facebook.svg";
// import Linkedin from "./index/Assets/icons/linkedin.svg";
import Hero from "./index/Hero/Hero";
import AboutMe from "./index/AboutME/AboutMe";
import Services from "./index/Services/Services";
import Portfolio from "./index/Portfolio/Portfolio";
import Contact from "./index/Contact/Contact";
import Skills from "./index/Skills/Skills";
const Home = () => {
  return (
    <>
      <div className="w-full root-bg">
        {/* Hero Section */}
        <Hero />
        {/* media icons section */}
        {/* <div className="icon fixed top-64 bottom-0">
        <Image
          src={InstaIcon}
          width="22"
          height="22"
          className="m-2 cursor-pointer hover:w-8"
        />
        <Image
          src={TwitterIcon}
          width="22"
          height="22"
          className="m-2 cursor-pointer hover:w-8"
        />
        <Image
          src={FBIcon}
          width="22"
          height="22"
          className="m-2 cursor-pointer hover:w-8"
        />
        <Image
          src={Linkedin}
          width="22"
          height="22"
          className="m-2 cursor-pointer hover:w-8"
        />
      </div> */}
        {/* About Me Section */}
        <AboutMe />
        {/* Services Section */}
        <Services />
        {/* Skills Section */}
        <Skills/>
        {/* Portfolio Section */}
        <Portfolio />
        {/* Contact Section */}
        <Contact />
      </div>
    </>
  );
};

export default Home;
