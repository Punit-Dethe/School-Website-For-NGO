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
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-wide">
            OUR CURRICULUM
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Prana School follows the C.B.S.E curriculum, ensuring a holistic and comprehensive education for our students.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Left Side: Curriculum Bars */}
          <div className="w-full max-w-md lg:w-1/2 space-y-4">
            {curriculumData.map((item) => (
              <div
                key={item.level}
                className={`p-5 rounded-xl text-white font-bold text-xl text-center shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${item.color}`}
                onMouseEnter={() => setActiveImage(item.image)}
              >
                {item.level}
              </div>
            ))}
          </div>

          {/* Right Side: Image Display */}
          <div className="w-full max-w-md lg:w-1/2 lg:max-w-lg">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[450px]">
              <img
                src={activeImage}
                alt="Curriculum Level"
                className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
