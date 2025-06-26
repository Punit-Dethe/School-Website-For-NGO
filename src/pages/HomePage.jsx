import React from 'react';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import WhatWeDo from '../components/WhatWeDo';
import WhyTheyNeedUs from '../components/WhyTheyNeedUs';
import Activities from '../components/Activities';
import Curriculum from '../components/Curriculum';
import Testimonial from '../components/testamonial';
import FAQ from '../components/FAQ';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <OurStory />
      <WhatWeDo />
      <WhyTheyNeedUs />
      <Activities />
      <Curriculum />
      <Testimonial />
      <FAQ />
    </div>
  );
};

export default HomePage;
