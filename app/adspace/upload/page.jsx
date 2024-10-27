"use client";

import { useState } from "react";

const UploadAd = () => {
  const [ad, setAd] = useState({ image: "", category: "", link: "" });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAd({ ...ad, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAd((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const categoryPath = ad.category === "indoor" ? "indoor" : "outdoor";

    const response = await fetch(`/api/adspace/${categoryPath}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ad),
    });

    if (response.ok) {
      alert("Ad uploaded successfully!");
      setAd({ image: "", category: "", link: "" });
      setSelectedFile(null);
    } else {
      alert("Failed to upload ad");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Upload Ad</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Ad Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg p-2"
            required
          />
          {ad.image && (
            <img
              src={ad.image}
              alt="Ad Preview"
              className="mt-2 h-40 w-full object-cover border rounded"
            />
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            name="category"
            value={ad.category}
            onChange={handleChange}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg p-2"
            required
          >
            <option value="">Select Category</option>
            <option value="indoor">Indoor Games</option>
            <option value="outdoor">Outdoor Games</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Ad Link
          </label>
          <input
            type="text"
            name="link"
            placeholder="Ad Link"
            value={ad.link}
            onChange={handleChange}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-500 transition duration-200"
        >
          Upload Ad
        </button>
      </form>
    </div>
  );
};

export default UploadAd;
