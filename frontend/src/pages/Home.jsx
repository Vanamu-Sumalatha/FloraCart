import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
            filter: "brightness(0.7)"
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Beautiful Bouquets for Every Occasion
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover our handcrafted flower arrangements, perfect for birthdays, anniversaries, or just because.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/products"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors text-lg font-medium"
            >
              Shop Now
            </Link>
            <Link
              to="/custom"
              className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium"
            >
              Custom Bouquets
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our curated collection of beautiful flower arrangements for every special moment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Birthday Bouquets */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-64">
                <img
                  src="https://media.istockphoto.com/id/1966814562/photo/fresh-red-roses-in-a-bouquet-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=hBAnhv-RRG5Jnan2fXfufdYrZe7Y4ipUQJWeqLoJVCA="
                  alt="Birthday bouquets"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-2xl font-semibold">Birthday Bouquets</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Celebrate special moments with our vibrant birthday arrangements.
                </p>
                <Link
                  to="/products"
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center"
                >
                  View Collection
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Anniversary Bouquets */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-64">
                <img
                  src="https://media.istockphoto.com/id/532519641/photo/beautiful-bouquet-ready-for-presentation.jpg?s=612x612&w=0&k=20&c=TvGwXIrIReU5xb8RfIsmjG1Vjy6e59xs35_7tCHO9yg="
                  alt="Anniversary bouquets"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-2xl font-semibold">Anniversary Bouquets</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Express your love with our romantic anniversary bouquets.
                </p>
                <Link
                  to="/products"
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center"
                >
                  View Collection
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Custom Bouquets */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-64">
                <img
                  src="https://media.istockphoto.com/id/1054918150/photo/arranging-artificial-flowers-vest-decoration-at-home-young-woman-florist-work-making.jpg?s=612x612&w=0&k=20&c=I9tzQ8LCe4fshFeU_NCsln_q_uPi18kH2mEKaixQV0w="
                  alt="Custom bouquets"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-2xl font-semibold">Custom Bouquets</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Create your perfect arrangement with our custom bouquet service.
                </p>
                <Link
                  to="/products"
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center"
                >
                  Design Your Bouquet
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Special Offers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take advantage of our limited-time offers and save on your favorite bouquets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Offer 1 */}
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <div className="inline-block bg-primary text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
                  Limited Time
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Spring Collection</h3>
                <p className="text-gray-600 mb-4">
                  Get 20% off on all spring bouquets. Use code <span className="font-mono bg-gray-200 px-1 rounded">SPRING20</span> at checkout.
                </p>
                <Link
                  to="/products"
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center"
                >
                  Shop Now
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Offer 2 */}
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <div className="inline-block bg-primary text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
                  New
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Free Shipping</h3>
                <p className="text-gray-600 mb-4">
                  Enjoy free shipping on all orders over $100. No code needed, automatically applied at checkout.
                </p>
                <Link
                  to="/products"
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center"
                >
                  Shop Now
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the highest quality flowers and exceptional service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4 text-primary">🌺</div>
              <h3 className="text-xl font-semibold mb-2">Fresh Flowers</h3>
              <p className="text-gray-600">
                We source the freshest flowers daily from local and international suppliers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4 text-primary">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Same-day delivery available for orders placed before 2 PM.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4 text-primary">💯</div>
              <h3 className="text-xl font-semibold mb-2">Satisfaction Guarantee</h3>
              <p className="text-gray-600">
                100% satisfaction guarantee on all our products.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4 text-primary">🎁</div>
              <h3 className="text-xl font-semibold mb-2">Gift Service</h3>
              <p className="text-gray-600">
                Add a personalized message to your bouquet for a special touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The flowers were absolutely beautiful and arrived right on time for my mother's birthday. She was so happy with them!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Customer</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "I ordered a custom bouquet for my wedding and it was exactly what I wanted. The florist was so helpful and the flowers were stunning!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <h4 className="font-semibold">Michael Brown</h4>
                  <p className="text-sm text-gray-500">Customer</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The subscription service is amazing! I receive a beautiful bouquet every month and they're always fresh and gorgeous."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <h4 className="font-semibold">Emily Davis</h4>
                  <p className="text-sm text-gray-500">Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      
    </div>
  );
};

export default Home; 