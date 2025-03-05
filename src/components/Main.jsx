import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import BeautySection from "./BeautySection";
import ServicePage from "./ServicePage";
import BookNow from "./BookNow";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div id="home">

      <HeroSection />
      </div>
      <div id="about">
        <BeautySection />
      </div>
      <div id="services">
        <ServicePage />
      </div>
      <div id="contact">
        <BookNow />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
