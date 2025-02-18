import { Link } from "react-router-dom";
const images = import.meta.glob("/src/assets/posters/*.png", { eager: true });

const categories = [
  { name: "Vibe Check", path: "/category/vibe-check", image: images["/src/assets/posters/1.png"].default },
  { name: "Pixel Playground", path: "/category/pixel-playground", image: images["/src/assets/posters/2.png"].default },
  { name: "Reality Remix", path: "/category/reality-remix", image: images["/src/assets/posters/3.png"].default },
  { name: "Timeless Strokes", path: "/category/timeless-strokes", image: images["/src/assets/posters/4.png"].default }
];

function Gallery() {
  return (
    <div>
      <div className="flex justify-center gap-1 mb-8 mt-8">
        <div className="h-2 w-1/4 bg-blue-200 ml-16"></div>
        <div className="h-2 w-1/4 bg-blue-400"></div>
        <div className="h-2 w-1/4 bg-blue-600"></div>
        <div className="h-2 w-1/4 bg-blue-800 mr-16"></div>
      </div>
      <div className="text-center text-5xl text-gray-600 mt-12 mb-8">Best Selling in Art</div>
      <div className="flex justify-center gap-10 p-12">
        {categories.map((category) => (
          <Link to={category.path} key={category.name} className="w-1/5 mx-2">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-auto rounded-sm shadow-lg transition-transform transform hover:scale-120"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;