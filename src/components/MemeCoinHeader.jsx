import React, { useState } from "react";
import { FaBars, FaTimes, FaRocket, FaFrog } from "react-icons/fa";

const MemeCoinHeader = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-yellow-200 text-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-2xl font-bold">
            <FaFrog className="text-green-600" />
            <span>Froggu</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-lg">
            <a href="#herosection" className="hover:text-green-600 transition">
              Home
            </a>
            <a href="#aboutus" className="hover:text-green-600 transition">
              About
            </a>
            <a href="#tokenomics" className="hover:text-green-600 transition">
              Tokenomics
            </a>
            <a href="#roadmap" className="hover:text-green-600 transition">
              Roadmap
            </a>
            {/*  */}
            <a href="#" className="hover:text-green-600 transition">
              Gallery
            </a>
            <a href="#" className="hover:text-green-600 transition">
              Meme Maker
            </a>
            {/*  */}
          </nav>

          {/* Buy Button */}
          <div className="hidden md:flex">
            <a
              href="#"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded flex items-center gap-2 transition"
            >
              <FaRocket />
              Buy Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-2xl text-green-700 focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-yellow-100 border-t border-yellow-300">
          <nav className="flex flex-col px-4 py-2 space-y-2 text-lg">
            <a href="#herosection" className="hover:text-green-600 transition">
              Home
            </a>
            <a href="#aboutus" className="hover:text-green-600 transition">
              About
            </a>
            <a href="#tokenomics" className="hover:text-green-600 transition">
              Tokenomics
            </a>
            <a href="#roadmap" className="hover:text-green-600 transition">
              Roadmap
            </a>
            {/*  */}
            <a href="#" className="hover:text-green-600 transition">
              Gallery
            </a>
            <a href="#" className="hover:text-green-600 transition">
              Meme Maker
            </a>
            {/*  */}
            <a
              href="#"
              className="mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded flex items-center gap-2 transition w-fit"
            >
              <FaRocket />
              Buy Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default MemeCoinHeader;
