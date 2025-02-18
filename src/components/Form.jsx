import React, { useState } from "react";

const Form = () => {
  const [image, setImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setImage(null);
    setFormData({
      name: "",
      title: "",
      description: "",
    });
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-12 mt-4 relative">
      <div className="max-w-3xl w-full mx-auto p-8 bg-zinc-50 rounded-lg shadow-md mt-4">
        <h2 className="text-3xl font-semibold text-gray-600 mb-4 text-center">
          Submit Your Art
        </h2>

        {/* Image Upload Section */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Upload Artwork
          </label>
          <div className="mt-2 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4 cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="fileUpload"
              onChange={handleImageUpload}
              required
            />
            <label htmlFor="fileUpload" className="text-gray-600 cursor-pointer">
              {image ? (
                <img
                  src={image}
                  alt="Uploaded Preview"
                  className="w-40 h-40 object-cover rounded-md"
                />
              ) : (
                "Click to upload or drag and drop an image"
              )}
            </label>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-2 text-gray-600"
              required
            />
          </div>

          {/* Title Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Title of the Artwork
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter the title"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-2 text-gray-600"
              required
            />
          </div>

          {/* Description Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter a brief description of your artwork"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-2 text-gray-600"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button className="mt-2 px-6 py-2 bg-blue-800 text-white font-semibold rounded-full border-2 border-transparent hover:bg-white hover:text-blue-800 hover:border-blue-800 transition duration-300 shadow-sm">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
          <div className="bg-zinc-50 p-6 rounded-sm shadow-lg text-center w-80 relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <h3 className="text-3xl font-semibold text-gray-600">Thank You!</h3>
            <p className="text-gray-700 mt-4 text-xl">
              Your artwork has been submitted successfully.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
