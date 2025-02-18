import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className='bg-white text-black py-4'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex flex-col items-center gap-4'>
          {/*logo*/}
          <div className='flex items-center gap-4'>
            <img  
              src={logo}
              alt="logo"
              className="w-full h-10 object-cover"
            />
          </div>
          
          {/* Copyright Text */}
          <div className='text-sm text-gray-400'>
            © 2025 by levanter914
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;