import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaFilter, FaSort, FaStar, FaShoppingCart, FaHeart, FaEye } from 'react-icons/fa';
import { products, categories, occasions, flowerTypes, colors } from '../data/flowerData';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import QuickViewModal from '../components/QuickViewModal';

const Products = () => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [selectedFlowerType, setSelectedFlowerType] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 300 });
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter products based on search term and filters
  useEffect(() => {
    let result = products;

    // Apply search filter
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Apply occasion filter
    if (selectedOccasion) {
      result = result.filter(product => product.occasion.includes(selectedOccasion));
    }

    // Apply flower type filter
    if (selectedFlowerType) {
      result = result.filter(product => 
        product.description.toLowerCase().includes(selectedFlowerType.toLowerCase())
      );
    }

    // Apply color filter
    if (selectedColor) {
      result = result.filter(product => 
        product.description.toLowerCase().includes(selectedColor.toLowerCase())
      );
    }

    // Apply price range filter
    result = result.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        // Featured sorting (default order)
        break;
    }

    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, selectedOccasion, selectedFlowerType, selectedColor, priceRange, sortBy]);

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedOccasion('');
    setSelectedFlowerType('');
    setSelectedColor('');
    setPriceRange({ min: 0, max: 300 });
    setSortBy('featured');
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const handleToggleWishlist = (e, productId) => {
    e.preventDefault();
    toggleWishlist(productId);
  };

  const handleQuickView = (e, product) => {
    e.preventDefault();
    setSelectedProduct(product);
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <h1 className="text-3xl font-bold text-center mb-8">Our Flower Collection</h1>
      
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search flowers..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute right-3 top-3 text-gray-400" />
        </div>
        
        <div className="flex gap-2">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter /> Filters
          </button>
          <select
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="reviews">Most Reviews</option>
          </select>
        </div>
      </div>
      
      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category Filter */}
            <div>
              <h3 className="font-semibold mb-2">Category</h3>
              <select
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Occasion Filter */}
            <div>
              <h3 className="font-semibold mb-2">Occasion</h3>
              <select
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={selectedOccasion}
                onChange={(e) => setSelectedOccasion(e.target.value)}
              >
                <option value="">All Occasions</option>
                {occasions.map(occasion => (
                  <option key={occasion.id} value={occasion.id}>
                    {occasion.name}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Flower Type Filter */}
            <div>
              <h3 className="font-semibold mb-2">Flower Type</h3>
              <select
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={selectedFlowerType}
                onChange={(e) => setSelectedFlowerType(e.target.value)}
              >
                <option value="">All Flower Types</option>
                {flowerTypes.map(type => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Color Filter */}
            <div>
              <h3 className="font-semibold mb-2">Color</h3>
              <select
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                <option value="">All Colors</option>
                {colors.map(color => (
                  <option key={color.id} value={color.id}>
                    {color.name}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Price Range Filter */}
            <div className="md:col-span-2">
              <h3 className="font-semibold mb-2">Price Range</h3>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  min="0"
                  max="300"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({...priceRange, min: Number(e.target.value)})}
                  className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Min"
                />
                <span>to</span>
                <input
                  type="number"
                  min="0"
                  max="300"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({...priceRange, max: Number(e.target.value)})}
                  className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Max"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <button
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 mr-2"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
            <Link to={`/product/${product.id}`}>
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-pink-500 text-white px-2 py-1 rounded-full text-sm">
                  ${product.price.toFixed(2)}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button
                    className="bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-pink-500 hover:text-white transition-colors"
                    onClick={(e) => handleQuickView(e, product)}
                  >
                    <FaEye />
                  </button>
                </div>
                <button
                  className="absolute top-2 left-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
                  onClick={(e) => handleToggleWishlist(e, product.id)}
                >
                  <FaHeart 
                    className={`w-5 h-5 ${
                      isInWishlist(product.id) 
                        ? 'text-red-500' 
                        : 'text-gray-400'
                    }`} 
                  />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="text-sm">{product.rating} ({product.reviews})</span>
                  </div>
                  <button
                    className={`p-2 rounded-full transition-colors ${
                      addedToCart[product.id]
                        ? 'bg-green-500 text-white'
                        : 'bg-pink-500 text-white hover:bg-pink-600'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(product);
                    }}
                  >
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      
      {/* Quick View Modal */}
      {selectedProduct && (
        <QuickViewModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      
      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No products found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your filters or search term</p>
          <button
            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Products; 