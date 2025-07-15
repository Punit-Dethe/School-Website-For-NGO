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

const HomePage = () => {
  return (
    <div>
      <Hero />
      <QuotePage />
      <AboutSection />
      <HopeCard />
        <WhatWeDo />
      <Activities />
      <Curriculum />
      <Testimonial />
      <FAQ />
    </div>
  );
};

export default HomePage;
