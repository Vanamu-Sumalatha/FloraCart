import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaStar, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductReviews from '../components/ProductReviews';

// Sample product data - in a real app, this would come from an API
const products = [
  {
    id: 1,
    name: 'Spring Blossom Bouquet',
    price: 49.99,
    category: 'bouquet',
    occasion: ['birthday', 'spring'],
    images: [
      'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    ],
    description: 'A vibrant arrangement of spring flowers including tulips, daffodils, and hyacinths. This bouquet brings the freshness and colors of spring into any space, making it perfect for birthdays, spring celebrations, or simply to brighten someone\'s day.',
    longDescription: 'Our Spring Blossom Bouquet is carefully crafted with the freshest seasonal flowers. Each stem is hand-selected to ensure vibrant colors and long-lasting beauty. The arrangement features a mix of tulips in various colors, cheerful daffodils, and fragrant hyacinths, all complemented by delicate greenery. This bouquet is designed to capture the essence of spring and bring a burst of color and fragrance to any room.',
    rating: 4.8,
    reviews: 24,
    inStock: true,
    flowers: [
      { name: 'Tulips', quantity: 12, color: 'Mixed' },
      { name: 'Daffodils', quantity: 8, color: 'Yellow' },
      { name: 'Hyacinths', quantity: 6, color: 'Purple' },
      { name: 'Greenery', quantity: 5, color: 'Green' }
    ],
    careInstructions: 'Keep the bouquet in a clean vase with fresh water. Change the water every 2-3 days and trim the stems slightly at an angle. Keep away from direct sunlight and drafts. With proper care, these flowers can last up to 7-10 days.',
    shippingInfo: 'We carefully package our bouquets to ensure they arrive in perfect condition. Delivery is available within 1-2 business days for most areas. Same-day delivery is available for orders placed before 2 PM in select areas.'
  },
  // Add more products as needed
];

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  // Find the product by ID
  const product = products.find(p => p.id === parseInt(id));
  
  // If product not found, show error message
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you are looking for does not exist or has been removed.</p>
        <Link to="/products" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
          Back to Products
        </Link>
      </div>
    );
  }

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
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
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm">
        <Link to="/" className="text-gray-500 hover:text-primary">Home</Link>
        <span className="mx-2 text-gray-500">/</span>
        <Link to="/products" className="text-gray-500 hover:text-primary">Products</Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-800">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="relative">
          <div className="relative h-96 rounded-lg overflow-hidden">
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
                className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ${
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
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="text-gray-600">{product.rating} ({product.reviews} reviews)</span>
              </div>
              <span className="text-2xl font-bold text-pink-500">${product.price.toFixed(2)}</span>
            </div>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Quantity and Actions */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <label className="text-gray-700">Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
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

          {/* Product Details */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold mb-4">Product Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700">Flowers Included</h3>
                <ul className="mt-2 space-y-1">
                  {product.flowers?.map((flower, index) => (
                    <li key={index} className="text-gray-600">
                      {flower.quantity} {flower.name} ({flower.color})
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Care Instructions</h3>
                <p className="mt-2 text-gray-600">{product.careInstructions}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Shipping Information</h3>
                <p className="mt-2 text-gray-600">{product.shippingInfo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description Tabs */}
      <div className="mt-16">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              className={`py-4 px-6 border-b-2 ${
                activeTab === 'description'
                  ? 'border-pink-500 text-pink-500'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } font-medium`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`py-4 px-6 border-b-2 ${
                activeTab === 'reviews'
                  ? 'border-pink-500 text-pink-500'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } font-medium`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
            <button
              className={`py-4 px-6 border-b-2 ${
                activeTab === 'related'
                  ? 'border-pink-500 text-pink-500'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } font-medium`}
              onClick={() => setActiveTab('related')}
            >
              Related Products
            </button>
          </nav>
        </div>
        <div className="py-8">
          {activeTab === 'description' && (
            <>
              <h2 className="text-2xl font-semibold mb-4">About This Bouquet</h2>
              <p className="text-gray-600 leading-relaxed">{product.longDescription}</p>
            </>
          )}
          {activeTab === 'reviews' && <ProductReviews />}
          {activeTab === 'related' && (
            <div className="text-center text-gray-600">
              Related products coming soon...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 