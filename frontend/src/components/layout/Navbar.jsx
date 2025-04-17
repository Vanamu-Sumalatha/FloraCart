import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated] = useState(false); // This will be managed by auth context later

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">FloraCart</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary">
              Home
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-primary">
              Shop
            </Link>
            <Link to="/custom" className="text-gray-600 hover:text-primary">
              Custom Bouquets
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary">
              Contact
            </Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="text-gray-600 hover:text-primary">
              <span className="sr-only">Cart</span>
              🛒
            </Link>
            {isAuthenticated ? (
              <div className="relative group">
                <button className="text-gray-600 hover:text-primary">
                  <span className="sr-only">Account</span>
                  👤
                </button>
                <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl hidden group-hover:block">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Orders
                  </Link>
                  <button
                    onClick={() => {/* TODO: Implement logout */}}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-primary"
          >
            <span className="sr-only">Open menu</span>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-gray-600 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/custom"
                className="text-gray-600 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Custom Bouquets
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              {!isAuthenticated && (
                <Link
                  to="/login"
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 