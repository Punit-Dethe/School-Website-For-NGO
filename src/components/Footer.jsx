import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-2">123 Learning Lane, Education City, 12345</p>
        <p className="mb-2">Email: <a href="mailto:info@pranaschool.com" className="hover:underline">info@pranaschool.com</a></p>
        <p className="mb-6">Phone: (123) 456-7890</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-400">Facebook</a>
          <a href="#" className="hover:text-blue-400">Twitter</a>
          <a href="#" className="hover:text-blue-400">Instagram</a>
        </div>
        <p className="mt-8 text-sm text-gray-400">&copy; 2025 Prana School. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
