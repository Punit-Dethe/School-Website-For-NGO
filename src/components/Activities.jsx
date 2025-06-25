import React from 'react';

const Activities = () => {
  return (
    <section id="activities" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Extracurricular Activities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/400x300" alt="Science Club" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Science Club</h3>
              <p className="text-gray-600">Exploring the wonders of science through hands-on experiments and projects.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/400x300" alt="Debate Team" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Debate Team</h3>
              <p className="text-gray-600">Developing critical thinking and public speaking skills in a competitive and supportive environment.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/400x300" alt="Art Club" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Art Club</h3>
              <p className="text-gray-600">Unleashing creativity and artistic expression through various mediums and techniques.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
