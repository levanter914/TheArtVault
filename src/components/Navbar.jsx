import React, { useState, useEffect } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.menu-container')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on page change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Hamburger Menu Button */}
        <button 
          className="text-black p-2 hover:bg-gray-200 rounded-lg focus:outline-none"
          onClick={toggleMenu}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
            />
          </svg>
        </button>

        {/* Slide-in Menu */}
        <div 
          className={`fixed top-0 left-0 h-full bg-white shadow-lg w-64 transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out menu-container`}
        > 
          <button 
            className="absolute top-4 right-4 text-black p-2 hover:bg-gray-200 rounded-lg focus:outline-none"
            onClick={toggleMenu}
          >
            ✕
          </button>
          <ul className="mt-16 space-y-4 p-4">
            <li>
              <Link to="/form" className="block text-2xl text-black hover:text-blue" onClick={toggleMenu}>Art Submission Form</Link>
            </li>
            <li>
              <Link to="/about" className="block text-2xl text-gray-700 hover:text-black" onClick={toggleMenu}>About Me</Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={logo} alt="The Art Vault" className="h-16" />
        </Link>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          <a href="https://x.com/theartvault_xyz" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
