import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About FloraCart</h3>
            <p className="mb-4">
              We bring the beauty of flowers to your doorstep. Our carefully curated collections
              are perfect for every occasion, from birthdays to weddings.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-500 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                <FaPinterest size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="hover:text-pink-500 transition-colors">
                  Shop All Flowers
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-pink-500 transition-colors">
                  Custom Bouquets
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-pink-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-pink-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="hover:text-pink-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-pink-500 transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-pink-500 transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-pink-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>info@floracart.com</span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>123 Flower Street, Garden City, GC 12345</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} FloraCart. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/terms" className="text-sm hover:text-pink-500 transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-sm hover:text-pink-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/sitemap" className="text-sm hover:text-pink-500 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 