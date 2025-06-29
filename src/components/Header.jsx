import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">Prana School</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#our-story" className="text-gray-600 hover:text-blue-600">Our Story</a></li>
            <li><a href="#what-we-do" className="text-gray-600 hover:text-blue-600">What We Do</a></li>
            <li><a href="#activities" className="text-gray-600 hover:text-blue-600">Activities</a></li>
            <li><a href="#curriculum" className="text-gray-600 hover:text-blue-600">Curriculum</a></li>
            <li><Link to="/update" className="bg-pink-400 text-black font-bold py-2 px-4 rounded-lg border-2 border-black shadow-[2px_2px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200">Update</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
