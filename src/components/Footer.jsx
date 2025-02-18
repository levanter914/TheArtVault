import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6">
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="flex flex-col items-center gap-3">
          
          {/* Logo */}
          <div className="flex items-center">
            <img  
              src={logo}
              alt="logo"
              className="w-auto h-10 object-contain"
            />
          </div>

          {/* Copyright Text */}
          <div className="text-sm text-gray-500">
            © 2025 by <span className="font-medium">levanter914</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
