import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
  Heart
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(2); // example count

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) setShow(false);
    else setShow(true);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search for:", searchQuery);
    // integrate actual search logic
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.4 }}
          className="fixed w-full z-50 backdrop-blur bg-white/60 shadow-md"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">

              {/* Brand */}
              <a href="/" className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
                FashionHub
              </a>

              {/* Desktop Links */}
              <div className="hidden md:flex items-center space-x-8">
                {['Men','Women','Sale'].map((label) => (
                  <motion.a
                    key={label}
                    href={`/${label.toLowerCase()}`}
                    className="relative text-gray-800 hover:text-gray-900 font-medium"
                    whileHover={{ y: -2 }}
                  >
                    {label}
                  </motion.a>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-4">
                {/* Search */}
                <div className="relative">
                  <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 rounded-full hover:bg-gray-200 transition">
                    <Search size={20} />
                  </button>

                  <AnimatePresence>
                    {searchOpen && (
                      <motion.form
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 200, opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onSubmit={handleSearchSubmit}
                        className="absolute top-10 right-0 flex items-center bg-white border rounded-full overflow-hidden"
                      >
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search products..."
                          className="px-4 py-2 outline-none w-full"
                        />
                        <button type="submit" className="p-2">
                          <Search size={16} />
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>

                {/* Wishlist */}
                <button className="p-2 rounded-full hover:bg-gray-200 transition">
                  <Heart size={20} />
                </button>

                {/* Cart */}
                <button className="relative p-2 rounded-full hover:bg-gray-200 transition">
                  <ShoppingCart size={20} />
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>

                {/* Profile */}
                <button className="p-2 rounded-full hover:bg-gray-200 transition">
                  <User size={20} />
                </button>

                {/* Mobile Menu Toggle */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-md hover:bg-gray-200 transition">
                  {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Panel */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white shadow-inner"
              >
                <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
                  {['Men','Women','Sale'].map((label) => (
                    <a
                      key={label}
                      href={`/${label.toLowerCase()}`}
                      className="flex items-center space-x-2 text-gray-800 hover:text-gray-900 font-medium"
                    >
                      {/* you can add small icons next to text here */}
                      <span>{label}</span>
                    </a>
                  ))}
                  {/* Mobile Search */}
                  <form onSubmit={handleSearchSubmit} className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                    <Search size={16} />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="ml-2 bg-transparent outline-none w-full"
                    />
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
