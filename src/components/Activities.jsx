import React, { useRef } from 'react';

// Expanded mock data to 7 items with alternating heights for desktop.
const activitiesData = [
  { id: 1, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", height: 'short' },
  { id: 2, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", height: 'tall' },
  { id: 3, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", height: 'short' },
  { id: 4, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make", height: 'tall' },
  { id: 5, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", height: 'short' },
  { id: 6, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", height: 'tall' },
  { id: 7, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", height: 'short' },
];

// The three lighter green shades to cycle through.
const greenShades = ['#a3e6e0', '#75d7cd', '#47c8ba'];

const Activities = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="py-20 px-6 md:py-24 md:px-24 font-sans bg-[#f6f4ee]">
      {/* --- DESKTOP HEADER --- */}
      <div className="hidden md:flex justify-between items-start mb-12">
        <div className="max-w-[60%]">
          <h1 className="font-dancing-script text-7xl text-black" style={{fontWeight: 500}}>
            Activities
          </h1>
          <p className="mt-5 text-base text-gray-700 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
          </p>
        </div>
        <div className="flex items-center gap-10 mt-8 font-light">
          <span className="text-5xl text-black cursor-pointer select-none" onClick={() => scroll('left')}>&lt;</span>
          <span className="text-5xl text-black cursor-pointer select-none" onClick={() => scroll('right')}>&gt;</span>
        </div>
      </div>

      {/* --- MOBILE HEADER --- */}
      <div className="md:hidden mb-8">
        <h1 className="font-dancing-script text-6xl text-black" style={{fontWeight: 500}}>
          Activities
        </h1>
        <p className="mt-4 text-sm text-gray-700 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        </p>
      </div>

      {/* --- RESPONSIVE CAROUSEL --- */}
      <div ref={carouselRef} className="flex md:items-center gap-4 md:gap-8 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
        {activitiesData.map((activity, index) => {
          // Responsive heights and default mobile height
          const cardHeight = `h-[420px] ${activity.height === 'tall' ? 'md:h-[440px]' : 'md:h-[380px]'}`;
          const placeholderHeight = activity.height === 'tall' ? 'md:h-64 h-48' : 'h-48';
          return (
            <div
              key={activity.id}
              className={`snap-center relative flex flex-col flex-none w-[95%] md:w-80 p-4 shadow-glow ${cardHeight}`}
              style={{
                backgroundColor: greenShades[index % 3], // Cycle through the green shades
                border: '1px solid #000',
                borderRadius: '28px',
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 65px 100%, 45px 106%, 45px 100%, 0% 100%)',
              }}
            >
              <div className={`bg-white border-2 border-black rounded-2xl mb-5 ${placeholderHeight}`}></div>
              <p className="text-[15px] text-gray-800 leading-relaxed px-1">
                {activity.text}
              </p>
            </div>
          );
        })}
      </div>

      {/* --- MOBILE-ONLY NAVIGATION --- */}
      <div className="md:hidden flex justify-between items-center mt-6">
        <p className="text-base text-gray-600">Check out our activities</p>
        <div className="flex items-center gap-6 font-light">
          <span className="text-4xl text-black cursor-pointer select-none" onClick={() => scroll('left')}>&lt;</span>
          <span className="text-4xl text-black cursor-pointer select-none" onClick={() => scroll('right')}>&gt;</span>
        </div>
      </div>

    </div>
  );
};

export default Activities;
