import React from 'react';
import img from '../assets/image/img.jpg';
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 md:px-24 py-16">
      <div className="max-w-screen-lg w-full flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left side - Image */}
        <div className="w-full md:w-1/2">
          <img 
            src={img}
            alt="profile"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Right side - Text content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-blue-800 text-4xl md:text-6xl font-light italic">
            hi!
          </h1>
          <h2 className="text-blue-800 text-3xl md:text-5xl font-light">
            i'm shambhavi
          </h2>
          <div className="space-y-2 text-blue-800 text-xl md:text-3xl font-light">
            <p>21, cs major, india</p>
            <p>i build pretty websites</p>
            <p>and cool games.</p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start space-x-6 mt-16">
            <a href="https://www.linkedin.com/in/shambhavi0325/" target="_blank" rel="noopener noreferrer" className="text-gray-900 text-3xl md:text-4xl hover:text-blue-700">
              <FaLinkedin />
            </a>
            <a href="https://github.com/levanter914" target="_blank" rel="noopener noreferrer" className="text-gray-900 text-3xl md:text-4xl hover:text-blue-700">
              <FaGithub />
            </a>
            <a href="https://x.com/levanter914" target="_blank" rel="noopener noreferrer" className="text-gray-900 text-3xl md:text-4xl hover:text-blue-700">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
