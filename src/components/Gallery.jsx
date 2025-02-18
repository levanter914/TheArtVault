import { Link } from "react-router-dom";

// Import images correctly using `.default`
const images = import.meta.glob("/src/assets/posters/*.png", { eager: true });

const categories = [
  { name: "Vibe Check", path: "/", image: images["/src/assets/posters/1.png"].default },
  { name: "Pixel Playground", path: "/", image: images["/src/assets/posters/2.png"].default },
  { name: "Reality Remix", path: "/", image: images["/src/assets/posters/3.png"].default },
  { name: "Timeless Strokes", path: "/", image: images["/src/assets/posters/4.png"].default }
];

function Gallery() {
  return (
    <div className="container mx-auto px-6">
      {/* Color Gradient Bar */}
      <div className="flex justify-center gap-1 mb-8 mt-8">
        <div className="h-2 w-1/4 bg-[#012a4a]"></div>
        <div className="h-2 w-1/4 bg-[#013a63]"></div>
        <div className="h-2 w-1/4 bg-[#01497c]"></div>
        <div className="h-2 w-1/4 bg-[#014f8c]"></div>
      </div>

      {/* Title */}
      <div className="text-center text-4xl sm:text-5xl text-gray-600 font-light italic mt-8 mb-16">
        Best Selling in Art
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {categories.map((category) => (
          <Link to={category.path} key={category.name} className="group">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-auto rounded-md shadow-md transform transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
