import React from 'react';

const Practise = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. NAVBAR */}
      <nav className="flex items-center justify-between px-4 md:px-10 py-4 bg-white border-b border-gray-200 sticky top-0 z-50">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>
          <span className="text-xl font-bold text-blue-700 hidden sm:block">MegaMart</span>
        </div>

        {/* Middle: Search Bar (Fluid & Responsive) */}
        <div className="flex-1 mx-4 max-w-xl group">
          <div className="relative flex items-center">
            <input 
              type="text" 
              placeholder="Search products..."
              className="w-full min-w-0 bg-gray-100 border border-transparent focus:bg-white focus:border-blue-500 px-4 py-2 rounded-full outline-none transition-all"
            />
            <button className="absolute right-3 text-gray-400 group-focus-within:text-blue-600">
              🔍
            </button>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 md:gap-6 shrink-0 text-sm font-medium text-gray-600">
          <div className="hidden md:flex gap-4">
            <a href="#" className="hover:text-blue-600">Sign In</a>
            <span className="text-gray-300">|</span>
          </div>
          <a href="#" className="relative hover:text-blue-600">
            <span>Cart</span>
            <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-[10px] rounded-full px-1.5 py-0.5">3</span>
          </a>
          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-2xl">☰</button>
        </div>
      </nav>

      {/* 2. HERO SECTION (Grid Responsive) */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-blue-700 rounded-3xl overflow-hidden p-8 md:p-16 text-white">
          
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <span className="bg-blue-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Limited Offer
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Upgrade Your <br /> Digital Life.
            </h1>
            <p className="text-blue-100 text-lg">
              Get up to 40% off on the latest smartphones and accessories. Valid until midnight!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition">
                Shop Now
              </button>
              <button className="border border-blue-400 px-8 py-3 rounded-xl font-bold hover:bg-blue-600 transition">
                View Deals
              </button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative flex justify-center">
             <div className="w-full max-w-sm aspect-square bg-blue-500/30 rounded-2xl border-2 border-dashed border-blue-400 flex items-center justify-center">
                <span className="text-blue-200">Product Image</span>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Practise;