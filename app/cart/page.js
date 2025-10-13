'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Cart() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setIsDark(true);
  }, []);

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Professional Drill Kit", price: 15999, quantity: 1, image: "🛠️" },
    { id: 2, name: "LED Bulbs 10W Pack", price: 350, quantity: 3, image: "💡" },
    { id: 3, name: "Safety Helmet", price: 1200, quantity: 2, image: "🛡️" },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 300;
  const total = subtotal + shipping;

  return (
    <div className={`font-sans flex flex-col min-h-screen ${isDark ? 'bg-[url("/dARKBarkground.PNG")]' : 'bg-[url("/LIGHTBarkground.PNG")]'}`}>
      
      {/* Header */}
      <div className={`flex items-center w-full ${isDark ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm p-4`}>
        <Link href="/" className="text-blue-600 hover:underline mr-6">
          ← Back to Home
        </Link>
        <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Shopping Cart</h1>
      </div>

      {/* Content */}
      <div className="container mx-auto p-6 flex-1 max-w-6xl">
        {cartItems.length === 0 ? (
          <div className={`text-center p-12 rounded-2xl ${isDark ? 'bg-black/60 text-white' : 'bg-white/80 text-gray-800'} backdrop-blur-md`}>
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="opacity-70 mb-4">Add some products to get started</p>
            <Link href="/" className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className={`rounded-2xl ${isDark ? 'bg-black/60 text-white' : 'bg-white/80 text-gray-800'} backdrop-blur-md p-6`}>
                <h2 className="text-xl font-bold mb-6">Cart Items ({cartItems.length})</h2>
                
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className={`flex items-center justify-between p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <div className="flex items-center space-x-4">
                        <div className={`w-20 h-20 rounded-lg flex items-center justify-center text-2xl ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          {item.image}
                        </div>
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-green-600 font-bold">KSh {item.price.toLocaleString()}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                          >
                            +
                          </button>
                        </div>
                        
                        {/* Remove Button */}
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-600 p-2"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className={`rounded-2xl ${isDark ? 'bg-black/60 text-white' : 'bg-white/80 text-gray-800'} backdrop-blur-md p-6 h-fit`}>
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>KSh {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>KSh {shipping.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-t pt-3 font-bold text-lg">
                  <span>Total</span>
                  <span className="text-green-600">KSh {total.toLocaleString()}</span>
                </div>
              </div>

              <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-bold text-lg mb-4">
                Proceed to Checkout
              </button>
              
              <Link href="/" className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors font-bold text-lg block text-center">
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}