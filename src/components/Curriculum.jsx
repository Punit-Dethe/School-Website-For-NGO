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
    color: 'bg-[#f39c12]', // Orange
    image: placeholderImages['PRE-PRIMARY'],
  },
  {
    level: 'PRIMARY',
    color: 'bg-[#2ecc71]', // Green
    image: placeholderImages['PRIMARY'],
  },
  {
    level: 'MIDDLE',
    color: 'bg-[#3498db]', // Blue
    image: placeholderImages['MIDDLE'],
  },
  {
    level: 'SECONDARY',
    color: 'bg-[#9b59b6]', // Purple
    image: placeholderImages['SECONDARY'],
  },
  {
    level: 'SENIOR SECONDARY',
    color: 'bg-[#e74c3c]', // Red
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

      <div className="relative w-full">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side: Vertical Text Display */}
          <div className="w-full lg:w-1/4 pl-0 pr-4 lg:pr-8 flex items-start">
            <div className="overflow-hidden shadow-2xl w-full max-w-xs bg-black flex items-center justify-center" style={{ height: 'calc(5 * 4.25rem)' }}>
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="text-white text-2xl font-bold tracking-widest transform -rotate-90 whitespace-nowrap">
                  <span className="text-yellow-400">OUR</span> CURRICULUM
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Curriculum Bars */}
          <div className="w-full lg:flex-1 relative">
            <div className="absolute inset-y-0 left-0 right-0 lg:right-[-100vw] bg-white -z-10"></div>
            <div className="relative ml-[-64px] pl-0 pr-0">
              {curriculumData.map((item, index) => (
                <div
                  key={item.level}
                  className={`py-5 px-8 flex items-center justify-center text-center text-white font-bold text-xl cursor-pointer transition-all duration-300 hover:scale-105 ${item.color} ${
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
