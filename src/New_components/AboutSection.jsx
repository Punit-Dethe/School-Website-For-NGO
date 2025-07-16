import React from 'react';

const AboutSection = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-8 lg:px-12 mt-20 pt-12 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 w-full items-start">
        {/* Left column: small box + text */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="bg-white rounded-2xl w-full h-72 lg:h-80 border-2 border-gray-200 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]" />
          <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center lg:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
          </p>
        </div>
        
        {/* Center: large box */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-2xl w-full h-96 lg:h-[28rem] border-2 border-gray-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]" />
        </div>
        
        {/* Right: Our Story */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pt-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-['MouldyCheeseRegular-WyMWG','Outfit',sans-serif] underline underline-offset-4 decoration-[#000]">
            Our Story
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 