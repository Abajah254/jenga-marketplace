'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SafetyGear() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setIsDark(true);
  }, []);

  const safetyProducts = [
    { id: 1, name: "Safety Helmet", price: "KSh 1,200" },
    { id: 2, name: "Safety Gloves Pair", price: "KSh 850" },
    { id: 3, name: "Safety Goggles", price: "KSh 650" },
    { id: 4, name: "Ear Protection", price: "KSh 1,500" },
    { id: 5, name: "Safety Boots", price: "KSh 3,800" },
    { id: 6, name: "Reflective Vest", price: "KSh 950" },
  ];

  return (
    <div className={`font-sans flex flex-col min-h-screen ${isDark ? 'bg-[url("/dARKBarkground.PNG")]' : 'bg-[url("/LIGHTBarkground.PNG")]'}`}>
      
      {/* Header */}
      <div className={`flex items-center w-full ${isDark ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm p-4`}>
        <Link href="/" className="text-blue-600 hover:underline mr-6">
          ← Back to Home
        </Link>
        <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Safety Gear</h1>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto p-6 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyProducts.map((product) => (
            <div key={product.id} className={`rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${isDark ? 'bg-black/80 text-white' : 'bg-white/80 text-gray-800'} backdrop-blur-sm`}>
              {/* Product Image Placeholder */}
              <div className={`w-full h-48 rounded-lg mb-4 flex items-center justify-center ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <span className={isDark ? 'text-gray-300' : 'text-gray-500'}>🛡️</span>
              </div>
              
              {/* Product Info */}
              <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
              <p className="text-green-600 font-bold text-2xl mb-4">{product.price}</p>
              
              {/* Action Buttons */}
              <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-medium">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}