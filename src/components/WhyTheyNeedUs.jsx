import React from 'react';

const WhyTheyNeedUs = () => {
  return (
    <section id="why-they-need-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Prana School?</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://via.placeholder.com/500x300" alt="Happy Students" className="rounded-lg shadow-md"/>
          </div>
          <div>
            <ul className="space-y-6 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Experienced Faculty:</strong> Our teachers are passionate, experienced, and dedicated to helping each student succeed.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Small Class Sizes:</strong> We maintain a low student-to-teacher ratio to ensure personalized attention for every child.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Supportive Community:</strong> We foster a warm and inclusive community where students feel safe, respected, and supported.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTheyNeedUs;
