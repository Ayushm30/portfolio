import React from 'react'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import HeroImg2 from "../components/HeroImg2.js";
import AboutContent from "../components/AboutContent.js";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="Im a
      friendly Front-End Developer." />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
