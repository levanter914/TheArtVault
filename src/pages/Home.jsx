import React, { useState, useEffect } from "react";
import Gallery from "../components/Gallery";

const Home = () => {
  const images = [
    new URL("../assets/headers/1.png", import.meta.url).href,
    new URL("../assets/headers/2.png", import.meta.url).href,
    new URL("../assets/headers/3.png", import.meta.url).href,
    new URL("../assets/headers/4.png", import.meta.url).href,
    new URL("../assets/headers/5.png", import.meta.url).href,
    new URL("../assets/headers/6.png", import.meta.url).href,
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-white text-black">
      {/* Header Section */}
      <div className="flex justify-center items-center min-h-screen pt-2 relative">
        {/* Slideshow Image */}
        <img
          src={images[currentIndex]}
          alt={`Slideshow image ${currentIndex + 1}`}
          className="w-[1000px] h-[500px] object-cover transition-opacity duration-1000 ease-in-out"
        />

        {/* Overlay Content with Margins */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[650px] h-[20%] flex flex-col items-center justify-center bg-white bg-opacity-75 shadow-sm p-4 rounded-sm">

          <h1 className="text-4xl text-gray-600 mb-4">Welcome to The Art Vault</h1>

          <button className="mt-2 px-6 py-2 bg-blue-800 text-white  rounded-full border-2 border-transparent hover:bg-white hover:text-blue-800 hover:border-blue-800 transition duration-300">
            About Us
          </button>
        </div>
      </div>
      <Gallery />
    </div>
  );
};

export default Home;
