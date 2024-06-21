import React from "react";
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
        <div id="home">
        <Hero />
        </div>
        {/* About Me Section */}
        <div id="aboutMe">
        <AboutMe />
        </div>
        {/* Services Section */}
        <div id="services">
        <Services />
        </div>
        {/* Skills Section */}
        <div id="skills">
        <Skills/>
        </div>
        {/* Portfolio Section */}
        <div id="portfolio">
        <Portfolio />
        </div>
        {/* Contact Section */}
        <div id="contact">
        <Contact />
        </div>
      </div>
    </>
  );
};

export default Home;
