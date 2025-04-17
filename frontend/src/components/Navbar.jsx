import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaSearch, FaHeart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Categories', path: '/categories' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="fixed w-full z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-pink-500">FloraCart</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-pink-500'
                      : 'text-gray-600 hover:text-pink-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Side Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleSearch}
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                <FaSearch className="w-5 h-5" />
              </button>
              <Link to="/wishlist" className="relative text-gray-600 hover:text-pink-500 transition-colors">
                <FaHeart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link to="/cart" className="relative text-gray-600 hover:text-pink-500 transition-colors">
                <FaShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 hover:bg-pink-200 transition-colors"
              >
                <FaUser className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-pink-500 transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="py-4">
              <form onSubmit={handleSearch} className="flex">
                <input
                  type="text"
                  placeholder="Search for flowers..."
                  className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-pink-500 text-white px-4 py-2 rounded-r-lg hover:bg-pink-600 transition-colors"
                >
                  Search
                </button>
              </form>
            </div>
          )}

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-pink-500 bg-pink-50'
                        : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="border-t border-gray-200 pt-4 px-4">
                  <div className="flex justify-around">
                    <button className="text-gray-600 hover:text-pink-500 transition-colors">
                      <FaSearch className="w-5 h-5" />
                    </button>
                    <Link to="/wishlist" className="relative text-gray-600 hover:text-pink-500 transition-colors">
                      <FaHeart className="w-5 h-5" />
                      {wishlistCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {wishlistCount}
                        </span>
                      )}
                    </Link>
                    <Link to="/cart" className="relative text-gray-600 hover:text-pink-500 transition-colors">
                      <FaShoppingCart className="w-5 h-5" />
                      {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {cartCount}
                        </span>
                      )}
                    </Link>
                    <button
                      onClick={() => setIsAuthModalOpen(true)}
                      className="text-gray-600 hover:text-pink-500 transition-colors"
                    >
                      <FaUser className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};

export default Navbar; 