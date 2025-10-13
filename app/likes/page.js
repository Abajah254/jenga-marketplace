'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Likes() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setIsDark(true);
  }, []);

  const favoriteProducts = [
    { id: 1, name: "Professional Drill Kit", price: "KSh 15,999", category: "Tools" },
    { id: 2, name: "LED Bulbs 10W", price: "KSh 350", category: "Electricals" },
    { id: 3, name: "Safety Helmet", price: "KSh 1,200", category: "Safety Gear" },
  ];

  return (
    <div className={`font-sans flex flex-col min-h-screen ${isDark ? 'bg-[url("/dARKBarkground.PNG")]' : 'bg-[url("/LIGHTBarkground.PNG")]'}`}>
      
      {/* Header */}
      <div className={`flex items-center w-full ${isDark ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm p-4`}>
        <Link href="/" className="text-blue-600 hover:underline mr-6">
          ← Back to Home
        </Link>
        <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>My Favorites</h1>
      </div>

      {/* Content */}
      <div className="container mx-auto p-6 flex-1 max-w-4xl">
        {favoriteProducts.length === 0 ? (
          <div className={`text-center p-12 rounded-2xl ${isDark ? 'bg-black/60 text-white' : 'bg-white/80 text-gray-800'} backdrop-blur-md`}>
            <div className="text-6xl mb-4">💔</div>
            <h2 className="text-2xl font-bold mb-2">No favorites yet</h2>
            <p className="opacity-70 mb-4">Products you like will appear here</p>
            <Link href="/" className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className={`rounded-2xl ${isDark ? 'bg-black/60 text-white' : 'bg-white/80 text-gray-800'} backdrop-blur-md p-6`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">{favoriteProducts.length} Favorite Items</h2>
              <button className="text-red-500 hover:text-red-600">Clear All</button>
            </div>
            
            <div className="space-y-4">
              {favoriteProducts.map((product) => (
                <div key={product.id} className={`flex items-center justify-between p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <div className="flex items-center">
                    <div className={`w-16 h-16 rounded-lg mr-4 flex items-center justify-center ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <span>♥</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm opacity-70">{product.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-600 font-bold text-lg">{product.price}</p>
                    <button className="text-red-500 hover:text-red-600 text-sm">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}