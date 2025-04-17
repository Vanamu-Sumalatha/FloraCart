import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
  return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    // Dispatch custom event to update navbar counter
    window.dispatchEvent(new Event('wishlistUpdated'));
  }, [wishlistItems]);

  // Add item to wishlist
  const addToWishlist = (product) => {
    setWishlistItems(prev => {
      if (prev.includes(product.id)) {
        return prev;
      }
      return [...prev, product.id];
    });
  };

  // Remove item from wishlist
  const removeFromWishlist = (productId) => {
    setWishlistItems(prev => prev.filter(id => id !== productId));
  };

  // Toggle item in wishlist
  const toggleWishlist = (productId) => {
    setWishlistItems(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  // Check if item is in wishlist
  const isInWishlist = (productId) => {
    return wishlistItems.includes(productId);
  };

  // Get wishlist count
  const getWishlistCount = () => {
    return wishlistItems.length;
  };

  // Clear wishlist
  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    getWishlistCount,
    clearWishlist
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext; 