import React, { useRef } from 'react';

// Data for the testimonial cards based on the provided image
const articles = [
  {
    logo: {
      text: 'EQUIPMENT WORLD',
    },
    title: "Moxion's Portable Power Solution Recharges Electric Equipment in the Field",
    bgColor: 'bg-gray-800',
    textColor: 'text-white',
    dotColor: 'text-white',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    logo: {
      text: 'The Hollywood Reporter',
    },
    title: '"How Studios Are Making Sustainability the Default"',
    bgColor: 'bg-teal-300',
    textColor: 'text-black',
    dotColor: 'text-black',
    imageUrl: 'https://images.unsplash.com/photo-1554672408-730436b60dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    logo: {
      text: 'FOR CONSTRUCTION PROS.COM',
    },
    title: '"Contractors Will Soon Be Able To Rent Moxion Mobile Battery Units From Sunbelt Rentals"',
    bgColor: 'bg-white',
    textColor: 'text-black',
    dotColor: 'text-black',
    imageUrl: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    logo: {
      text: 'TECHCRUNCH',
    },
    title: '"The innovative approach to mobile power is a game-changer for outdoor events."',
    bgColor: 'bg-blue-500',
    textColor: 'text-white',
    dotColor: 'text-white',
    imageUrl: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    logo: {
      text: 'BUSINESS INSIDER',
    },
    title: '"Moxion is powering the future of sustainable industry, one battery at a time."',
    bgColor: 'bg-yellow-400',
    textColor: 'text-black',
    dotColor: 'text-black',
    imageUrl: 'https://images.unsplash.com/photo-1600880292210-f7611a43a609?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    logo: {
      text: 'RENEWABLE ENERGY WORLD',
    },
    title: '"A cleaner, quieter, and more efficient solution for on-site power needs."',
    bgColor: 'bg-green-500',
    textColor: 'text-white',
    dotColor: 'text-white',
    imageUrl: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }
];

// Arrow component for navigation
const Arrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
  >
    {direction === 'left' ? (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    )}
  </button>
);


const Testimonial = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollContainerRef;
    if (current) {
      const scrollAmount = current.offsetWidth * 0.8; // Scroll by 80% of the container width
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };


  return (
    <section className="bg-[#F9F6F0] py-20 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-5xl md:text-6xl font-bold text-black max-w-lg leading-tight">
            See what all the talk is about.
          </h2>
          <div className="hidden md:flex items-center gap-x-3">
             <Arrow direction="left" onClick={() => scroll('left')} />
             <Arrow direction="right" onClick={() => scroll('right')} />
          </div>
        </div>
        <hr className="border-gray-300 mb-12" />

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-8 pb-8 scrollbar-hide"
        >
          {articles.map((article, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-80 md:w-96 rounded-2xl overflow-hidden ${article.bgColor} ${article.textColor}`}
            >
              <img src={article.imageUrl} alt={article.title} className="w-full h-64 object-cover rounded-b-2xl" />
              <div className="p-8">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className={`w-3 h-3 rounded-full ${article.dotColor} bg-current opacity-50 mb-8`}></div>
                    <div className="text-sm font-semibold tracking-widest uppercase opacity-70 mb-4">
                      {article.logo.text}
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium leading-snug">
                    {article.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile navigation buttons */}
        <div className="flex md:hidden items-center justify-end gap-x-3 mt-8">
           <Arrow direction="left" onClick={() => scroll('left')} />
           <Arrow direction="right" onClick={() => scroll('right')} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;