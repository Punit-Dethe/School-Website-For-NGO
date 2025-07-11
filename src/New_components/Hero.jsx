import React from 'react';
import Navbar from './Navbar.jsx';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col">
      {/* Navbar */}
      <Navbar />
      {/* Responsive layout */}
      <div className="flex-1 flex flex-col md:flex-row w-full h-full">
        {/* Left Side (always blue) */}
        <div className="w-full md:w-1/2 bg-[#6CC4E3] flex flex-col justify-center items-center py-8 px-4 md:px-0 relative overflow-visible">
          {/* Image for small screens (top, with margin) */}
          <div className="block md:hidden w-full flex justify-center items-center mt-12 mb-8">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="Children in need"
              className="rounded-3xl border-4 border-white shadow-2xl w-full max-w-xs h-auto object-cover"
            />
          </div>
          {/* Centered text for small screens, left-aligned for md+ */}
          <div className="max-w-xl w-full flex flex-col items-center md:items-start justify-center gap-8 text-center md:text-left">
            <h1 className="font-['TT Milks Script Trial Bold','MouldyCheeseRegular-WyMWG','Outfit',sans-serif] text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Give <span className="underline underline-offset-8 decoration-white">Hope</span><br />To Children<br />In Need
            </h1>
            <div className="flex gap-4 mt-4 flex-wrap justify-center md:justify-start">
              <button className="bg-[#FF7A2F] text-white font-bold rounded-full px-8 py-3 text-lg shadow hover:bg-orange-600 transition">Donate</button>
              <button className="border-2 border-white text-white font-semibold rounded-full px-8 py-3 text-lg bg-transparent hover:bg-white hover:text-[#6CC4E3] transition">what is written here</button>
            </div>
          </div>
        </div>
        {/* Right Side (green, only on md+) */}
        <div className="hidden md:flex w-1/2 bg-[#02A856] justify-center items-center py-16 px-0 relative overflow-visible">
          {/* Overlapping image */}
          <div className="relative w-full flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Children in need"
              className="rounded-3xl border-4 border-white shadow-2xl object-cover max-h-[500px] w-[80%] md:w-[110%] md:-ml-[20%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
