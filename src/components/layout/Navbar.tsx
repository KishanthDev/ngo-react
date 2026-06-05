'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-[99] border-b border-gray-100 shadow-sm">
      <div className="max-w-[1216px] mx-auto h-[86px] flex items-center justify-between lg:justify-start px-4 sm:px-6 lg:px-8 py-[18px]">
        <Link to="/" className="h-full flex items-center shrink-0">
          <h1 className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
            Voice Of People
          </h1>
        </Link>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-gray-600 hover:text-rose-600">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            ) : (
              <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />
            )}
          </svg>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-grow w-full justify-end ml-8">
          <ul className="flex items-center space-x-2 xl:space-x-4">
            <li className="px-3 py-2"><Link to="#impact" className="text-base font-medium text-gray-700 hover:text-rose-600 transition-colors">Our Impact</Link></li>
            <li className="px-3 py-2"><Link to="#what-we-do" className="text-base font-medium text-gray-700 hover:text-rose-600 transition-colors">Projects</Link></li>
            <li className="ml-4 pl-4 border-l border-gray-200">
              <button className="bg-white border-2 border-rose-500 text-rose-600 hover:bg-rose-50 font-semibold px-6 py-2 rounded-full transition-colors">Login</button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white w-full h-[calc(100vh-86px)] overflow-y-auto border-t border-gray-100 absolute left-0 top-[86px]">
          <div className="flex flex-col px-6 py-6 space-y-2">
            <Link to="#impact" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-800 py-3 border-b border-gray-100">Our Impact</Link>
            <Link to="#what-we-do" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-800 py-3 border-b border-gray-100">Projects</Link>
            <div className="pt-8 pb-12">
              <button className="w-full bg-rose-500 text-white font-semibold text-lg py-3.5 rounded-full shadow-md hover:bg-rose-600 transition-colors">Login</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};