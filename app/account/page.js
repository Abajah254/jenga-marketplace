'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Account() {
  const [isDark, setIsDark] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setIsDark(true);
  }, []);

  const userData = {
    name: "John Kamau",
    email: "john.kamau@email.com",
    phone: "+254 712 345 678",
    location: "Nairobi, Kenya",
    joined: "January 2024",
    orders: 12,
    favorites: 8
  };

  const orders = [
    { id: 1, date: "2024-09-15", total: 18999, status: "Delivered", items: 3 },
    { id: 2, date: "2024-09-10", total: 8500, status: "Processing", items: 2 },
    { id: 3, date: "2024-09-05", total: 15600, status: "Delivered", items: 4 },
  ];

  return (
    <div className={`font-sans flex flex-col min-h-screen ${isDark ? 'bg-[url("/dARKBarkground.PNG")]' : 'bg-[url("/LIGHTBarkground.PNG")]'}`}>
      
      {/* Header */}
      <div className={`flex items-center w-full ${isDark ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm p-4`}>
        <Link href="/" className="text-blue-600 hover:underline mr-6">
          ← Back to Home
        </Link>
        <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>My Account</h1>
      </div>

      {/* Content */}
      <div className="container mx-auto p-6 flex-1 max-w-6xl">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className={`rounded-2xl ${isDark ? 'bg-black/60 text-white' : 'bg-white/80 text-gray-800'} backdrop-blur-md p-6 h-fit`}>
            <div className="text-center mb-6">
              <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                👤
              </div>
              <h2 className="font-bold text-lg">{userData.name}</h2>
              <p className="text-sm opacity-70">{userData.email}</p>
            </div>

            <nav className="space-y-2">
              {[
                { id: 'profile', label: 'Profile', icon: '👤' },
                { id: 'orders', label: 'My Orders', icon: '📦' },
                { id: 'favorites', label: 'Favorites', icon: '♥' },
                { id: 'settings', label: 'Settings', icon: '⚙️' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors flex items-center space-x-3 ${
                    activeTab === tab.id 
                      ? 'bg-red-600 text-white' 
                      : isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className={`rounded-2xl ${isDark ? 'bg-black/60 text-white' : 'bg-white/80 text-gray-800'} backdrop-blur-md p-6`}>
              
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input 
                        type="text" 
                        defaultValue={userData.name}
                        className={`w-full p-3 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        defaultValue={userData.email}
                        className={`w-full p-3 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input 
                        type="tel" 
                        defaultValue={userData.phone}
                        className={`w-full p-3 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Location</label>
                      <input 
                        type="text" 
                        defaultValue={userData.location}
                        className={`w-full p-3 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                      />
                    </div>
                  </div>
                  <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-bold">
                    Update Profile
                  </button>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Order History</h2>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">Order #{order.id}</h3>
                            <p className="text-sm opacity-70">Date: {order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-green-600 font-bold">KSh {order.total.toLocaleString()}</p>
                            <span className={`px-2 py-1 rounded text-xs ${
                              order.status === 'Delivered' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm">{order.items} items • Track Order • View Details</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Favorites Tab */}
              {activeTab === 'favorites' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">My Favorites</h2>
                  <p className="opacity-70">You have {userData.favorites} favorite items</p>
                  <Link href="/likes" className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
                    View All Favorites
                  </Link>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                  <div className="space-y-4">
                    <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <h3 className="font-semibold mb-2">Notifications</h3>
                      <p className="text-sm opacity-70 mb-2">Manage your notification preferences</p>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-sm">
                        Configure Notifications
                      </button>
                    </div>
                    <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <h3 className="font-semibold mb-2">Security</h3>
                      <p className="text-sm opacity-70 mb-2">Change password and security settings</p>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-sm">
                        Update Security
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}