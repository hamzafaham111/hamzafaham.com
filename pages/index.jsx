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
      <div className="w-full root-bg !scroll-smooth">
        {/* Hero Section */}
        <section id="home">
        <Hero />
        </section>
        {/* About Me Section */}
        <section id="aboutMe">
        <AboutMe />
        </section>
        {/* Services Section */}
        <section id="services">
        <Services />
        </section>
        {/* Skills Section */}
        <section id="skills">
        <Skills/>
        </section>
        {/* Portfolio Section */}
        <section id="portfolio">
        <Portfolio />
        </section>
        {/* Contact Section */}
        <section id="contact">
        <Contact />
        </section>
      </div>
    </>
  );
};

export default Home;
