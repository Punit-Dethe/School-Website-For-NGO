import React from 'react';

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Academic Excellence</h3>
            <p className="text-gray-600">We provide a rigorous and comprehensive academic program designed to challenge and inspire students.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Creative Arts</h3>
            <p className="text-gray-600">Our arts program encourages students to express themselves through music, drama, and visual arts.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Sports & Wellness</h3>
            <p className="text-gray-600">We promote a healthy and active lifestyle through a variety of sports and wellness programs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
