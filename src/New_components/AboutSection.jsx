import React from 'react';

const AboutSection = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-8 lg:px-12 mt-16 pt-8 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 w-full items-start">
        {/* Left column: small box + text */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-sm h-60 lg:h-72 border border-gray-200 mb-6 drop-shadow-[4px_4px_0px_rgba(108,196,227,0.15)]" />
          <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center lg:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
          </p>
        </div>
        
        {/* Center: large box */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-sm h-80 lg:h-96 border border-gray-200 drop-shadow-[4px_4px_0px_rgba(108,196,227,0.15)]" />
        </div>
        
        {/* Right: Our Story */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-['MouldyCheeseRegular-WyMWG','Outfit',sans-serif] underline underline-offset-4 decoration-[#000]">
            Our Story
          </h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 