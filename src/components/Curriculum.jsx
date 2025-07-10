import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// TODO: Replace this placeholder with the actual path to your image
// For example: import curriculumImage from '../assets/curriculum-photo.jpg';
const curriculumImage = 'https://placehold.co/400x400/333333/white?text=Your+Image+Here';

const subjects = [
  { name: 'Science', color: 'bg-[#A8DDEB]', image: 'https://placehold.co/400x400/A8DDEB/black?text=Science' },
  { name: 'Maths', color: 'bg-[#6CC4E3]', image: 'https://placehold.co/400x400/6CC4E3/black?text=Maths' },
  { name: 'Civics', color: 'bg-[#4EABC9]', image: 'https://placehold.co/400x400/4EABC9/white?text=Civics' },
  { name: 'History', color: 'bg-[#3D93B0]', image: 'https://placehold.co/400x400/3D93B0/white?text=History' },
  { name: 'Geography', color: 'bg-[#327E98]', image: 'https://placehold.co/400x400/327E98/white?text=Geography' },
];

const Curriculum = () => {
  const [activeImage, setActiveImage] = useState(subjects[0].image);
  return (
    <section id="curriculum" className="bg-white">
      <div className="relative w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left Side: Image and Title */}
          <div className="w-full lg:w-auto flex-shrink-0 self-stretch">
            <div
              className="bg-black flex items-center justify-center h-full"
              style={{
                width: 'calc(25rem + 5vw)',
                minWidth: '25rem',
                maxWidth: '35rem',
              }}
            >
              <div className="w-full p-8 flex flex-col justify-center items-center text-center">
                <h2 className="text-white text-4xl font-serif italic mb-4">
                  <span className="border-b-2 border-white pb-1">Curriculum</span>
                </h2>
                <div className="w-full max-w-xs aspect-square mt-4 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage} // Change the key to trigger animation
                      src={activeImage}
                      alt="Curriculum subject image"
                      className="w-full h-full object-cover rounded-2xl shadow-lg absolute inset-0"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Subjects List */}
          <div className="flex-1 flex flex-col">
            {subjects.map((subject) => (
              <div
                key={subject.name}
                className={`flex items-center justify-center text-center text-white font-bold cursor-pointer transition-transform duration-200 hover:scale-105 ${subject.color}`}
                style={{
                  height: 'calc(5rem + 2vw)', // Responsive height
                  minHeight: '6rem',
                  maxHeight: '8rem',
                  fontSize: 'calc(1.5rem + 0.5vw)', // Responsive font size
                  flexGrow: 1,
                }}
                onMouseEnter={() => setActiveImage(subject.image)}
              >
                {subject.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
