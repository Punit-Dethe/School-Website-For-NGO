import React from 'react';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import WhatWeDo from '../components/WhatWeDo';
import WhyTheyNeedUs from '../components/WhyTheyNeedUs';
import Activities from '../components/Activities';
import Curriculum from '../components/Curriculum';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <OurStory />
      <WhatWeDo />
      <WhyTheyNeedUs />
      <Activities />
      <Curriculum />
    </div>
  );
};

export default HomePage;
