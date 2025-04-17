import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaArrowLeft, FaShoppingBag } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal
  } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <FaShoppingBag className="w-16 h-16 text-pink-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              to="/products"
              className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
            >
              Continue Shopping
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="text-xl font-semibold">Shopping Cart ({cartItems.length} items)</h2>
              </div>
              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="ml-4 flex-grow">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <button
                          className="px-2 py-1 border rounded-l"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                          className="w-16 px-2 py-1 border-t border-b text-center"
                        />
                        <button
                          className="px-2 py-1 border rounded-r"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="ml-4 text-right">
                      <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                      <button
                        className="text-red-500 hover:text-red-600 mt-2"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t">
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${(getCartTotal() * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${(getCartTotal() * 1.1).toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 