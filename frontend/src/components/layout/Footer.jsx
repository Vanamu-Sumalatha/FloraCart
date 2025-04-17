import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About FloraCart</h3>
            <p className="text-gray-300">
              Your one-stop shop for beautiful flower bouquets and arrangements.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/custom" className="text-gray-300 hover:text-white">
                  Custom Bouquets
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/birthday" className="text-gray-300 hover:text-white">
                  Birthday Bouquets
                </Link>
              </li>
              <li>
                <Link to="/category/anniversary" className="text-gray-300 hover:text-white">
                  Anniversary Bouquets
                </Link>
              </li>
              <li>
                <Link to="/category/custom" className="text-gray-300 hover:text-white">
                  Custom Bouquets
                </Link>
              </li>
              <li>
                <Link to="/category/seasonal" className="text-gray-300 hover:text-white">
                  Seasonal Arrangements
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📞 (123) 456-7890</li>
              <li>📧 info@floracart.com</li>
              <li>📍 123 Flower Street, Garden City</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} FloraCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 