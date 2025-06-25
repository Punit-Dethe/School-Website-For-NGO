import React from 'react';
// Using the provided screenshot image. 
// For a real application, this should be replaced with separate, optimized image assets.
import heroImage from '../assets/Screenshot 2025-06-26 030654.png';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const LearnMoreArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const EducatorsArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-5-5m5 5l-5 5" />
    </svg>
)

const Hero = () => {
  return (
    <div className="bg-[#FDFCF9] font-sans">
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
              Unlock Your Child's
              <br />
              Brightest <span className="relative inline-block">Future
                <svg className="absolute -bottom-3 left-0 w-full h-auto" viewBox="0 0 158 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 15.5C20.6667 10.3333 63.6 -2.40002 156 4.99998" stroke="#FF9B28" strokeWidth="5" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Fun, engaging, and real-life learning experiences for every young explorer.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
                <a href="#" className="group bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-300 flex items-center shadow-md">
                    Learn More <LearnMoreArrow />
                </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
                <div className="flex items-center text-gray-700 font-medium">
                    <CheckIcon />
                    <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center text-gray-700 font-medium">
                    <CheckIcon />
                    <span>14-Day Free Trial</span>
                </div>
                <div className="flex items-center text-gray-700 font-medium">
                    <CheckIcon />
                    <span>Free for Teachers</span>
                </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative mt-10 md:mt-0">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-40 h-40 md:w-56 md:h-56 bg-teal-300 rounded-2xl transform -rotate-12 -translate-x-10"></div>
                <div className="absolute w-40 h-40 md:w-56 md:h-56 bg-orange-300 rounded-2xl transform rotate-12 translate-x-10 translate-y-16"></div>
            </div>
            
            <div className="relative z-10 p-4">
              <img src={heroImage} alt="Happy student learning" className="rounded-xl shadow-2xl mx-auto" />
              
              <div className="absolute bottom-4 -left-4 sm:-left-12 bg-white p-3 rounded-xl shadow-lg flex items-center space-x-3 w-auto max-w-xs">
                <div className="w-24 h-16 overflow-hidden rounded-md">
                    <img src={heroImage} alt="Educator" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <p className="font-bold text-gray-800 text-lg">210+</p>
                    <p className="text-sm text-gray-600 leading-tight">expert educators</p>
                </div>
                <a href="#" className="bg-teal-400 text-white p-3 rounded-full hover:bg-teal-500 transition">
                    <EducatorsArrow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
