'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Sell() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setIsDark(true);
  }, []);

  return (
    <div className={`font-sans flex flex-col min-h-screen ${isDark ? 'bg-[url("/dARKBarkground.PNG")]' : 'bg-[url("/LIGHTBarkground.PNG")]'}`}>
      
      {/* Header */}
      <div className={`flex items-center w-full ${isDark ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm p-4`}>
        <Link href="/" className="text-blue-600 hover:underline mr-6">
          ← Back to Home
        </Link>
        <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Sell on JENGA</h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6 flex-1 max-w-4xl">
        <div className={`rounded-2xl p-8 ${isDark ? 'bg-black/60 text-white' : 'bg-white/80 text-gray-800'} backdrop-blur-md shadow-xl`}>
          
          {/* Benefits Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Start Selling Today!</h2>
            <p className="text-lg opacity-80">Join thousands of Kenyan sellers growing their business with JENGA</p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className={`p-4 rounded-lg text-center ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <div className="text-2xl mb-2">💰</div>
              <h3 className="font-bold mb-2">Earn More</h3>
              <p className="text-sm">Competitive commission rates</p>
            </div>
            <div className={`p-4 rounded-lg text-center ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <div className="text-2xl mb-2">👥</div>
              <h3 className="font-bold mb-2">Reach More</h3>
              <p className="text-sm">Thousands of ready buyers</p>
            </div>
            <div className={`p-4 rounded-lg text-center ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <div className="text-2xl mb-2">🚚</div>
              <h3 className="font-bold mb-2">Easy Delivery</h3>
              <p className="text-sm">Nationwide logistics support</p>
            </div>
          </div>

          {/* Seller Registration Form */}
          <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h3 className="text-xl font-bold mb-4">Become a Seller</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Business Name"
                  className={`w-full p-3 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                />
                <input 
                  type="text" 
                  placeholder="Phone Number"
                  className={`w-full p-3 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address"
                className={`w-full p-3 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              />
              <select className={`w-full p-3 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}>
                <option>Select Business Type</option>
                <option>Individual Seller</option>
                <option>Registered Business</option>            
              </select>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-bold text-lg">
                Start Selling Now
              </button>
            </form>
          </div>

          {/* Requirements */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Requirements</h3>
            <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>✅ Kenyan National ID</li>
              <li>✅ Business registration certificate (if applicable)</li>
              <li>✅ MPESA account for payments</li>
              <li>✅ Product photos and descriptions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}