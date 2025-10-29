import React, { useState } from "react";
import user from "../assets/user.png";
import dow from "../assets/dow.png";
import searchIcon from "../assets/Search.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-40">
      <div className="backdrop-blur-sm text-white py-4">
        <div className=" mx-auto px-4">
          {/* Desktop View */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Logo */}
              <Link
                to="/"
               className="text-lg font-semibold bg-blue-700 px-4 lg:px-6 py-1 rounded-md shadow-sm">
                Logo
              </Link>

              {/* Search Bar - Desktop */}
              <div className="hidden md:block relative">
                <img
                  src={searchIcon}
                  alt="Search"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none opacity-80"
                />
                <input
                  type="text"
                  placeholder="Tìm kiếm phim, diễn viên"
                  className="bg-white/10 text-white placeholder-gray-300 pl-11 pr-4 py-2 rounded-md w-[280px] lg:w-[320px] focus:outline-none focus:bg-white/20"
                />
              </div>

              {/* Mobile Search Toggle */}
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="md:hidden"
              >
                <img src={searchIcon} alt="Search" className="w-5 h-5" />
              </button>

              {/* Navigation - Desktop */}
              <nav className="hidden lg:block">
                <ul className="flex items-center gap-6 text-sm opacity-90">
                  <li className="hover:text-blue-600 cursor-pointer transition-colors">Phim Lẻ</li>
                  <li className="hover:text-blue-600 cursor-pointer transition-colors">Phim Bộ</li>
                  <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer transition-colors">
                    Thể loại <img src={dow} alt="Dropdown" className="w-3 h-3" />
                  </li>
                  <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer transition-colors">
                    Quốc gia <img src={dow} alt="Dropdown" className="w-3 h-3" />
                  </li>
                  <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer transition-colors">
                    Xem Chung <img src={dow} alt="Dropdown" className="w-3 h-3" />
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer transition-colors">Thêm</li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">

              {/* User Button */}
              <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow-md">
                <img src={user} alt="User" className="w-5 h-5" />
                <span className="text-sm">Thành viên</span>
              </button>
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isSearchOpen && (
            <div className="mt-4 md:hidden">
              <div className="relative">
                <img
                  src={searchIcon}
                  alt="Search"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none opacity-80"
                />
                <input
                  type="text"
                  placeholder="Tìm kiếm phim, diễn viên"
                  className="bg-white/10 text-white placeholder-gray-300 pl-11 pr-4 py-2 rounded-md w-full focus:outline-none focus:bg-white/20"
                />
              </div>
            </div>
          )}

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 border-t border-white/10">
              <ul className="py-2 space-y-2">
                <li className="px-2 py-2 hover:bg-white/10 rounded-md cursor-pointer transition-colors">
                  Phim Lẻ
                </li>
                <li className="px-2 py-2 hover:bg-white/10 rounded-md cursor-pointer transition-colors">
                  Phim Bộ
                </li>
                <li className="px-2 py-2 hover:bg-white/10 rounded-md cursor-pointer transition-colors flex items-center justify-between">
                  <span>Thể loại</span>
                  <img src={dow} alt="Dropdown" className="w-3 h-3" />
                </li>
                <li className="px-2 py-2 hover:bg-white/10 rounded-md cursor-pointer transition-colors flex items-center justify-between">
                  <span>Quốc gia</span>
                  <img src={dow} alt="Dropdown" className="w-3 h-3" />
                </li>
                <li className="px-2 py-2 hover:bg-white/10 rounded-md cursor-pointer transition-colors flex items-center justify-between">
                  <span>Xem Chung</span>
                  <img src={dow} alt="Dropdown" className="w-3 h-3" />
                </li>
                <li className="px-2 py-2 hover:bg-white/10 rounded-md cursor-pointer transition-colors">
                  Thêm
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
