import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Men's", path: "/mens" },
  { name: "Women's", path: "/womens" },
  { name: "Sign In", path: "/login" },
  { name: "Admin", path: "/AdminDashboard" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navigation */}
        <div className="flex justify-between items-center h-16">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-playfair font-bold text-gray-900 hover:text-blue-600 transition-colors">
              ModernStyle
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.path)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  to={item.path}
                  className={`px-1 py-2 text-sm font-medium transition-colors relative ${
                    location.pathname === item.path 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-500'
                  }`}
                >
                  {item.name}
                  {/* Animated underline */}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out ${
                      hoveredItem === item.path || location.pathname === item.path
                        ? 'w-full opacity-100'
                        : 'w-0 opacity-0'
                    }`}
                    style={{
                      transformOrigin: 'left center',
                    }}
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <form className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-48 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none"
                />
                <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors">
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
              </div>
            </form>

            <Link 
              to="/cart" 
              className="p-2 text-gray-700 hover:text-blue-600 relative transition-colors"
            >
              <ShoppingBagIcon className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform hover:scale-110 transition-transform">
                2
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 focus:outline-none transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                location.pathname === item.path 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <form className="px-3 py-2">
            <div className="relative">
              <input
                type="search"
                placeholder="Search products..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;