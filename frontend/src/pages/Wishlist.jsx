import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaArrowLeft, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { products } from '../data/flowerData';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  // Filter products to only show wishlist items
  const wishlistProducts = products.filter(product => wishlistItems.includes(product.id));

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <FaHeart className="w-16 h-16 text-pink-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any items to your wishlist yet.
            </p>
            <Link
              to="/products"
              className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link
            to="/products"
            className="flex items-center text-gray-600 hover:text-pink-500"
          >
            <FaArrowLeft className="mr-2" />
            Continue Shopping
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">My Wishlist ({wishlistItems.length} items)</h2>
          </div>
          
          <div className="divide-y">
            {wishlistProducts.map(product => (
              <div key={product.id} className="p-4 flex items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="ml-4 flex-grow">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">{product.description}</p>
                </div>
                <div className="ml-4 flex flex-col items-end space-y-2">
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    <FaTrash />
                  </button>
                  <button
                    className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors flex items-center"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t flex justify-between items-center">
            <button
              className="text-red-500 hover:text-red-600"
              onClick={clearWishlist}
            >
              Clear Wishlist
            </button>
            <Link
              to="/cart"
              className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors"
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist; 