import React from 'react';

// Using a placeholder image with a similar theme.
const imageUrl = 'https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80';

const WhyTheyNeedUs = () => {
  return (
    <section id="why-they-need-us" className="py-20 bg-[#fdfaf5]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image Column */}
          <div className="w-full max-w-lg mx-auto">
            <img 
              src={imageUrl} 
              alt="Hope for others"
              className="w-full h-[480px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          {/* Text Content Column */}
          <div>
            <p className="text-yellow-600 font-semibold mb-2">Welcome To Charitus</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              You're the Hope of Others.
            </h2>
            <p className="text-gray-500 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                Donate Now
              </button>
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8c0 3.314-2.686 6-6 6S4 11.314 4 8c0-3.314 2.686-6 6-6v6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8c0-3.314 2.686-6 6-6v6h-6zM10 14c-3.314 0-6 2.686-6 6h12c0-3.314-2.686-6-6-6z" />
                </svg>
                <div>
                  <p className="text-gray-500 text-sm">Call Us:</p>
                  <p className="font-bold text-gray-800">+(694) 555-0102</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTheyNeedUs;
