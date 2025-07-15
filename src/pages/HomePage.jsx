import React from "react";
import Hero from "../New_components/Hero";
import AboutSection from "../New_components/AboutSection";
import QuotePage from "../New_components/QuotePage";
import HopeCard from "../New_components/Hopecard";
import Amenities from "../components/Amenities";
import Activities from "../components/Activities";
import Curriculum from "../components/Curriculum";
import Testimonial from "../components/testamonial";
import FAQ from "../components/FAQ";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <QuotePage />
      <AboutSection />
      <HopeCard />
      <Activities />
      <Amenities />
      <Curriculum />
      <Testimonial />
      <FAQ />
    </div>
  );
};

export default HomePage;
