import React from 'react';

const AboutSection = () => {
  return (
    <section className="w-full bg-white flex flex-col items-center px-2 mt-16 sm:px-4 pt-0 pb-0">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mb-12 items-start">
        {/* Left column: small box + text */}
        <div className="flex flex-col items-center md:items-start  w-full md:w-1/3">
          <div className="bg-white rounded-xl shadow-lg w-80 h-60 border border-gray-200 mb-4 drop-shadow-[4px_4px_0px_rgba(108,196,227,0.15)]" />
          <p className="text-gray-700 text-sm mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
          </p>
        </div>
        {/* Center: large box */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <div className="bg-white rounded-xl shadow-lg w-80 h-96 border border-gray-200 drop-shadow-[4px_4px_0px_rgba(108,196,227,0.15)]" />
        </div>
        {/* Right: Our Story */}
        <div className="flex flex-col items-start w-full md:w-1/3">
          <h3 className="text-2xl font-bold mb-2 font-['MouldyCheeseRegular-WyMWG','Outfit',sans-serif] underline underline-offset-4 decoration-[#000]">Our Story</h3>
          <p className="text-gray-700 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 