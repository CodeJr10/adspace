"use client";

import { useEffect, useState } from "react";

const IndoorAds = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      const response = await fetch("/api/adspace/indoor");
      const data = await response.json();
      setAds(data);
    };

    fetchAds();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Indoor Ads</h2>
      {ads.length === 0 ? (
        <p>No ads available.</p>
      ) : (
        <div className="flex overflow-x-auto space-x-4">
          {ads.map((ad, index) => (
            <div
              key={index}
              className="min-w-[200px] bg-gray-100 rounded-lg p-4"
            >
              <img
                src={ad.image}
                alt={`Ad ${index + 1}`}
                className="h-32 w-full object-cover rounded"
              />
              <p className="mt-2 text-sm">{ad.link}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IndoorAds;
