'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Load saved theme on page load
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setIsDark(true);
  }, []);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className={`font-sans flex flex-col min-h-screen ${isDark ? 'bg-[url("/dARKBarkground.PNG")]' : 'bg-[url("/LIGHTBarkground.PNG")]'}`}>
      
      {/* Header with Logo */}
      <header className={`flex items-center w-full ${isDark ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm`}>
        
        {/* Logo */}
        <div className="pl-4">
          {isDark ? (
            <Image
              src="/JENGADARK.PNG"
              alt="JENGA Logo"
              width={180}
              height={80}
              priority
            />
          ) : (
            <Image
              src="/JENGALIGHT.JPG"
              alt="JENGA Logo"
              width={180}
              height={80}
              priority
            />
          )}
        </div>

        {/* Sell on JENGA Button */}
        <div className="ml-6">
          <Link href="/sell" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-medium inline-block">
            Sell on JENGA
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex justify-center ml-6">
          <div className="w-full max-w-md flex gap-2">
            <input 
              type="text" 
              placeholder="Search for products"
              className={`flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                isDark ? 'text-white bg-gray-800' : 'text-black bg-white'
              }`}
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
              Search
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4 pr-4">
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className={`text-xl hover:text-yellow-500 ${isDark ? 'text-gray-300' : 'text-black'}`}
            title="Toggle theme"
          >
            🌓
          </button>
          
          {/* Likes Button */}
          <Link href="/likes" className={`flex items-center gap-1 hover:text-red-600 ${isDark ? 'text-gray-300' : 'text-black'}`}>
            <span className="text-xl">♥</span>
            <span className="text-sm">Likes</span>
          </Link>

          {/* Cart Button */}
          <Link href="/cart" className={`flex items-center gap-1 hover:text-green-600 ${isDark ? 'text-gray-300' : 'text-black'}`}>
            <span className="text-xl">🛒</span>
            <span className="text-sm">Cart</span>
          </Link>

          {/* Account Button */}
          <Link href="/account" className={`flex items-center gap-1 hover:text-blue-600 ${isDark ? 'text-gray-300' : 'text-black'}`}>
            <span className="text-xl">👤</span>
            <span className="text-sm">Account</span>
          </Link>
        </div>
      </header>

      {/* CATEGORY PANEL - TEXT NAMES ONLY */}
      <div className={`flex justify-center space-x-8 py-3 ${isDark ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm relative`}>
        {/* Notch Curves - Left */}
        <div className="absolute -top-4 left-0 w-8 h-4">
          <div className={`w-8 h-8 rounded-br-full ${isDark ? 'bg-black/80' : 'bg-white/80'}`}></div>
        </div>
        
        {/* Notch Curves - Right */}
        <div className="absolute -top-4 right-0 w-8 h-4">
          <div className={`w-8 h-8 rounded-bl-full ${isDark ? 'bg-black/80' : 'bg-white/80'}`}></div>
        </div>

        {/* Category Text Links - ALL WORKING LINKS */}
        <Link href="/hardware" className={`font-medium hover:underline ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Hardware
        </Link>
        <Link href="/electricals" className={`font-medium hover:underline ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Electricals
        </Link>
        <Link href="/plumbing" className={`font-medium hover:underline ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Plumbing
        </Link>
        <Link href="/car-parts" className={`font-medium hover:underline ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Car Parts
        </Link>
        <Link href="/tools" className={`font-medium hover:underline ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Tools
        </Link>
        <Link href="/building-materials" className={`font-medium hover:underline ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Building Materials
        </Link>
        <Link href="/safety-gear" className={`font-medium hover:underline ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Safety Gear
        </Link>
      </div>
    </div>
  );
}