<<<<<<< HEAD
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
=======
import React from 'react';
import Hero from '../New_components/Hero';
import AboutSection from '../New_components/AboutSection';
import QuotePage from '../New_components/QuotePage';
import HopeCard from '../New_components/Hopecard';
import OurStory from '../components/OurStory';
import WhatWeDo from '../New_components/WhatWeDo';
import WhyTheyNeedUs from '../components/WhyTheyNeedUs';
import Activities from '../components/Activities';
import Curriculum from '../components/Curriculum';
import Testimonial from '../components/testamonial';
import FAQ from '../components/FAQ';
>>>>>>> 31e813fd2a75a022ddd950fce43eee9eba9ea3a2

const HomePage = () => {
  return (
    <div>
      <Hero />
      <QuotePage />
      <AboutSection />
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
