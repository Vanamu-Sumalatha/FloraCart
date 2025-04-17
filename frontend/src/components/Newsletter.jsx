import React, { useState } from 'react';
import { FaEnvelope, FaCheck } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    try {
      // In a real app, you would make an API call here
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store email in localStorage for demo purposes
      const subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
      subscribers.push(email);
      localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
      
      setStatus('success');
      setEmail('');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }
  };

  return (
    <div className="bg-pink-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Stay updated with our latest collections, special offers, and flower care tips.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-grow relative">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`px-6 py-3 rounded-lg font-semibold text-white transition-colors ${
                status === 'loading'
                  ? 'bg-gray-400 cursor-not-allowed'
                  : status === 'success'
                  ? 'bg-green-500'
                  : 'bg-pink-500 hover:bg-pink-600'
              }`}
            >
              {status === 'loading' ? (
                'Subscribing...'
              ) : status === 'success' ? (
                <span className="flex items-center">
                  <FaCheck className="mr-2" />
                  Subscribed!
                </span>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>

          {status === 'error' && (
            <p className="text-red-500 mt-4">
              Something went wrong. Please try again later.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter; 