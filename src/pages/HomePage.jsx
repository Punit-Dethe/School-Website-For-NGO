import React from "react";
import HopeCard from "../New_components/Hopecard";
import WhatWeDo from "../components/WhatWeDo";
import Amenities from "../components/Amenities";
import Activities from "../components/Activities";
import Curriculum from "../components/Curriculum";
import Testimonial from "../components/testamonial";
import FAQ from "../components/FAQ";

const HomePage = () => {
  return (
    <div>
      <HopeCard />
      <WhatWeDo />
      <Activities />
      <Amenities />
      <Curriculum />
      <Testimonial />
      <FAQ />
    </div>
  );
};

export default HomePage;
