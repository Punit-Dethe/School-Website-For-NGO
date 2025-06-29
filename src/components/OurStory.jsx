import React from 'react';

const OurStory = () => {
  return (
    <section id="our-story" className="py-24 bg-black text-white font-sans">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left Column */}
          <div className="text-left">
            <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: "'Kalam', cursive" }}>
              What's Our Story
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="text-sm text-gray-500">
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
            </p>
          </div>

          {/* Right Column */}
          <div className="relative h-96 w-full flex items-center justify-center">
            {/* Card stack */}
            <div className="absolute w-72 h-80 bg-pink-400 rounded-3xl transform -rotate-12 shadow-2xl transition-transform hover:scale-105"></div>
            <div className="absolute w-72 h-80 bg-orange-400 rounded-3xl transform rotate-12 shadow-2xl transition-transform hover:scale-105"></div>
            <div className="absolute w-72 h-80 bg-white p-2 rounded-3xl transform rotate-2 shadow-2xl transition-transform hover:scale-105 hover:rotate-3">
                <div className="w-full h-full border-4 border-orange-400 rounded-2xl bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
