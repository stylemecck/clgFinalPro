import React, { useState, useEffect } from "react";
import { Menu, X, Search, Moon, Sun, ShoppingBag, User } from "lucide-react"; // Importing icons for the navbar
import { motion, AnimatePresence } from "framer-motion"; // For animating the navbar and search form

const Navt = () => {
  // State to toggle visibility of navbar during scroll
  const [show, setShow] = useState(true);
  
  // State to store the last scroll position for controlling navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // State to toggle the mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false);
  
  // State to manage the visibility of the search form
  const [searchOpen, setSearchOpen] = useState(false);
  
  // State to store the search query entered by the user
  const [searchQuery, setSearchQuery] = useState("");
  
  // State to toggle dark mode (light/dark theme)
  const [darkMode, setDarkMode] = useState(false);

  // Effect to apply dark mode by adding/removing the 'dark' class to the document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // Adding dark theme class
    } else {
      document.documentElement.classList.remove("dark"); // Removing dark theme class
    }
  }, [darkMode]); // Dependency array ensures the effect runs whenever `darkMode` changes

  // Function to control the navbar visibility based on the scroll position
  const controlNavbar = () => {
    // If user scrolls down and the scroll position is greater than 100, hide the navbar
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true); // Otherwise, show the navbar
    }
    setLastScrollY(window.scrollY); // Update the last scroll position
  };

  // Adding scroll event listener to control navbar visibility
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar); // Event listener for scroll
    return () => window.removeEventListener("scroll", controlNavbar); // Cleanup on component unmount
  }, [lastScrollY]); // Re-run when the scroll position changes

  // Handle search submission (e.g., fetch/search products based on query)
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (searchQuery.trim()) { // Only proceed if there is a valid search query
      console.log("Searching for:", searchQuery); // Log the search query (this would be replaced by an API call in the backend)
      if (window.innerWidth < 768) setSearchOpen(false); // Close search form on mobile devices after submission
    }
  };

  return (
    <>
      {/* Search form animation on mobile devices */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-50 px-4 md:hidden"
          >
            {/* Mobile search form */}
            <form
              onSubmit={handleSearch} // Trigger the handleSearch function when form is submitted
              className="relative bg-white shadow-lg rounded-lg p-2"
            >
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query as user types
                className="w-full border-0 bg-gray-100 dark:bg-gray-900 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-black"
                autoFocus // Focus on input field when the search form appears
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black dark:text-white"
              >
                <Search size={18} /> {/* Search icon */}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar animation on scroll */}
      <AnimatePresence>
        {show && (
          <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            exit={{ y: -80 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm z-40 border-b border-gray-100 dark:border-gray-800"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                {/* Logo Section */}
                <div className="flex-shrink-0">
                  <a href="/" className="text-2xl font-bold text-black dark:text-white">
                    ModernShop {/* Logo text */}
                  </a>
                </div>

                {/* Main Navigation Links (for desktop) */}
                <div className="hidden md:flex space-x-8 items-center">
                  <a href="/men" className="text-black dark:text-white hover:text-gray-600 font-medium">Men</a>
                  <a href="/women" className="text-black dark:text-white hover:text-gray-600 font-medium">Women</a>
                  <a href="/new" className="text-black dark:text-white hover:text-gray-600 font-medium">New Arrivals</a>
                  <a href="/sale" className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium">Sale</a>
                </div>

                {/* Right Section: Search, Dark Mode, Account, Cart, Mobile Menu */}
                <div className="flex items-center space-x-4">
                  {/* Desktop search form */}
                  <form onSubmit={handleSearch} className="hidden md:block relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                      className="w-48 border border-gray-200 dark:border-gray-700 rounded-full py-1.5 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-black bg-transparent transition-all duration-300 hover:w-56 focus:w-56"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black dark:text-white hover:text-gray-600"
                    >
                      <Search size={18} />
                    </button>
                  </form>

                  {/* Mobile search toggle */}
                  <button
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="md:hidden p-2 text-black dark:text-white"
                  >
                    <Search size={20} />
                  </button>

                  {/* Dark mode toggle */}
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 text-black dark:text-white"
                  >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>

                  {/* Account link */}
                  <a href="/account" className="p-2 text-black dark:text-white">
                    <User size={20} />
                  </a>

                  {/* Cart icon with item count */}
                  <a href="/cart" className="p-2 text-black dark:text-white relative">
                    <ShoppingBag size={20} />
                    <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      3 {/* Cart item count */}
                    </span>
                  </a>

                  {/* Mobile menu toggle */}
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 text-black dark:text-white"
                  >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="md:hidden bg-white dark:bg-black shadow-inner overflow-hidden"
                >
                  <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
                    <a href="/men" className="block px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white font-medium">Men</a>
                    <a href="/women" className="block px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white font-medium">Women</a>
                    <a href="/new" className="block px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white font-medium">New Arrivals</a>
                    <a href="/sale" className="block px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-red-600 dark:text-red-400 font-medium">Sale</a>
                    <div className="border-t border-gray-200 dark:border-gray-800 my-2"></div>
                    <a href="/account" className=" px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white font-medium flex items-center space-x-3">
                      <User size={18} />
                      <span>My Account</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navt;
