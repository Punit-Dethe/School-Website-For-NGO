import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Prana School</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#our-story" className="text-gray-600 hover:text-blue-600">Our Story</a></li>
            <li><a href="#what-we-do" className="text-gray-600 hover:text-blue-600">What We Do</a></li>
            <li><a href="#activities" className="text-gray-600 hover:text-blue-600">Activities</a></li>
            <li><a href="#curriculum" className="text-gray-600 hover:text-blue-600">Curriculum</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
