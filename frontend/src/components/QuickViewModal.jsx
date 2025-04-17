import React, { useState } from 'react';
import { FaTimes, FaStar, FaShoppingCart, FaHeart, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const QuickViewModal = ({ product, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product.id);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const previousImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <FaTimes />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="relative">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Navigation Arrows */}
                <button
                  onClick={previousImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                >
                  <FaArrowLeft className="text-gray-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                >
                  <FaArrowRight className="text-gray-800" />
                </button>
              </div>
              {/* Thumbnail Gallery */}
              <div className="flex gap-2 mt-4 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 ${
                      selectedImage === index ? 'ring-2 ring-pink-500' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                </div>
                <span className="text-2xl font-bold text-pink-500">${product.price.toFixed(2)}</span>
              </div>

              <p className="text-gray-600">{product.description}</p>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center gap-2"
                >
                  <FaShoppingCart />
                  Add to Cart
                </button>
                <button
                  onClick={handleToggleWishlist}
                  className={`p-3 rounded-lg border ${
                    isInWishlist(product.id)
                      ? 'bg-pink-500 text-white border-pink-500'
                      : 'border-gray-300 text-gray-600 hover:border-pink-500 hover:text-pink-500'
                  } transition-colors`}
                >
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal; 