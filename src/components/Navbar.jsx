import React, { useState } from 'react';
import { HiOutlineSearch, HiOutlineShoppingBag, HiMenu } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16  ">
          {/* Left section */}
          <div className="flex items-center">
            {/* Logo */}
            <a href="/" className="text-2xl font-bold text-gray-800">
             Forever
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:ml-10 space-x-8">
              <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="/collection" className="text-gray-700 hover:text-gray-900">Collection</a>
              <a href="/products" className="text-gray-700 hover:text-gray-900">Products</a>
              <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <a href="/search" className="p-2 text-gray-700 hover:text-gray-900">
              <HiOutlineSearch className="h-6 w-6" />
            </a>

            {/* Cart */}
            <a href="/cart" className="p-2 text-gray-700 hover:text-gray-900 relative">
              <HiOutlineShoppingBag className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                3
              </span>
            </a>

            {/* Account */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="/login" className="text-gray-700 hover:text-gray-900">Login</a>
              <a href="/orders" className="text-gray-700 hover:text-gray-900">Orders</a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            >
              <HiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Home</a>
              <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">About</a>
              <a href="/collection" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Collection</a>
              <a href="/products" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Products</a>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contact</a>
              <a href="/login" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Login</a>
              <a href="/orders" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Orders</a>
              <a href="/cart" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Cart</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;