import React from 'react';

const OurStory = () => {
  return (
    <section id="our-story" className="py-20 bg-cream">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="text-4xl font-bold text-vibrant-orange mb-6">What's Our Story</h2>
          <p className="text-gray-800 mb-4">
            Founded in 2010, Prana School started with a simple yet powerful vision: to create a learning environment
            where every child feels valued and empowered. 
          </p>
          <p className="text-gray-700 text-sm">
            Over the years, we have grown into a thriving community of students, parents, and teachers, all dedicated to 
            fostering a love for learning, creativity, and character.
          </p>
        </div>

        {/* Cards (Visual Design) */}
        <div className="relative w-[300px] h-[300px]">
          <div className="absolute top-0 left-0 w-[200px] h-[250px] bg-pink-300 rounded-xl rotate-[-15deg] shadow-lg z-0"></div>
          <div className="absolute top-0 left-[50px] w-[200px] h-[250px] bg-yellow-400 rounded-xl shadow-lg z-10"></div>
          <div className="absolute top-0 left-[100px] w-[200px] h-[250px] bg-orange-500 rounded-xl rotate-[15deg] shadow-lg z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
