import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/flowerData';
import { FaArrowRight } from 'react-icons/fa';

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-pink-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Flower Categories
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Explore our diverse collection of handcrafted flower arrangements for every occasion and celebration.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-gray-200 mb-4 line-clamp-2">{category.description}</p>
                <div className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">Explore Collection</span>
                  <FaArrowRight />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Flowers</h3>
              <p className="text-gray-600">All our flowers are handpicked and delivered fresh to your doorstep.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable delivery service to ensure your flowers arrive on time.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Arrangements</h3>
              <p className="text-gray-600">Create your perfect bouquet with our custom arrangement service.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-pink-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Bouquet?</h2>
          <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
            Browse our collection of handcrafted flower arrangements and find the perfect gift for your loved ones.
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-pink-500 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories; 