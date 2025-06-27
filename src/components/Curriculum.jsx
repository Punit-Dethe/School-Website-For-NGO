import React, { useState } from 'react';

// --- Image Placeholders ---
// You can replace these placeholder URLs with your actual image paths.
// For example: import prePrimaryImg from '../assets/Curriculum/pre-primary.jpg';
// And then use `image: prePrimaryImg` in the curriculumData array.
const placeholderImages = {
  'PRE-PRIMARY': 'https://placehold.co/600x450/f39c12/white?text=Pre-Primary',
  'PRIMARY': 'https://placehold.co/600x450/2ecc71/white?text=Primary',
  'MIDDLE': 'https://placehold.co/600x450/3498db/white?text=Middle',
  'SECONDARY': 'https://placehold.co/600x450/9b59b6/white?text=Secondary',
  'SENIOR SECONDARY': 'https://placehold.co/600x450/e74c3c/white?text=Senior+Secondary',
};

const curriculumData = [
  {
    level: 'PRE-PRIMARY',
    color: 'bg-[#f97028]', // Orange
    image: placeholderImages['PRE-PRIMARY'],
  },
  {
    level: 'PRIMARY',
    color: 'bg-[#f489a3]', // Pink
    image: placeholderImages['PRIMARY'],
  },
  {
    level: 'MIDDLE',
    color: 'bg-[#f3a20f]', // Dark Yellow 
    image: placeholderImages['MIDDLE'],
  },
  {
    level: 'SECONDARY',
    color: 'bg-[#f0bb0d]', // Yellow
    image: placeholderImages['SECONDARY'],
  },
  {
    level: 'SENIOR SECONDARY',
    color: 'bg-[#f97028]', // Red
    image: placeholderImages['SENIOR SECONDARY'],
  },
];

const Curriculum = () => {
  // Set the initial image to be the first one in the list
  const [activeImage, setActiveImage] = useState(curriculumData[0].image);

  return (
    <section id="curriculum" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-wide">
            OUR CURRICULUM
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Prana School follows the C.B.S.E curriculum, ensuring a holistic and comprehensive education for our students.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side: Vertical Text Display - Wider */}
          <div className="w-full lg:w-1/3 flex items-start">
            <div className="overflow-hidden shadow-2xl w-full bg-black flex items-center justify-center h-[25rem] lg:h-[30rem] xl:h-[35rem] transition-all duration-300">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="text-white text-2xl lg:text-3xl xl:text-4xl font-bold tracking-widest transform -rotate-90 whitespace-nowrap">
                  <span className="text-yellow-400">OUR</span> CURRICULUM
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Curriculum Bars - Adjusted Width */}
          <div className="w-full lg:w-2/3 relative">
            <div className="absolute inset-y-0 left-0 right-0 lg:right-[-100vw] bg-white -z-10"></div>
            <div className="relative ml-0 pl-0 pr-0">
              {curriculumData.map((item, index) => (
                <div
                  key={item.level}
                  className={`h-20 lg:h-24 xl:h-28 flex items-center justify-center text-center text-white font-bold text-xl lg:text-2xl xl:text-3xl cursor-pointer transition-all duration-300 hover:scale-105 ${item.color} ${
                    index < curriculumData.length - 1 
                      ? 'shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.6),inset_0_-3px_12px_rgba(0,0,0,0.3)]' 
                      : ''
                  }`}
                  onMouseEnter={() => setActiveImage(item.image)}
                >
                  {item.level}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
