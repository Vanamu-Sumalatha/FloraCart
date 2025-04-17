import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl animate-fade-in-delayed">
              We'd love to hear from you. Get in touch with our team for any inquiries or assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-pink-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                    <p className="text-gray-600">123 Flower Street, Garden City, GC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-pink-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone Number</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-pink-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Address</h3>
                    <p className="text-gray-600">info@floracart.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <FaClock className="text-pink-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-pink-100 p-3 rounded-full hover:bg-pink-200 transition-colors">
                    <FaFacebook className="text-pink-500 text-xl" />
                  </a>
                  <a href="#" className="bg-pink-100 p-3 rounded-full hover:bg-pink-200 transition-colors">
                    <FaTwitter className="text-pink-500 text-xl" />
                  </a>
                  <a href="#" className="bg-pink-100 p-3 rounded-full hover:bg-pink-200 transition-colors">
                    <FaInstagram className="text-pink-500 text-xl" />
                  </a>
                  <a href="#" className="bg-pink-100 p-3 rounded-full hover:bg-pink-200 transition-colors">
                    <FaLinkedin className="text-pink-500 text-xl" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 animate-fade-in">
                  <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Please enter your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Find Us</h2>
          <div className="h-96 rounded-lg overflow-hidden shadow-lg animate-fade-in-up-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1510727154834"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="FloraCart Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up-0">
              <h3 className="text-xl font-semibold mb-3">How do I track my order?</h3>
              <p className="text-gray-600">Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your delivery status on our website or through the courier's website.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up-1">
              <h3 className="text-xl font-semibold mb-3">What is your return policy?</h3>
              <p className="text-gray-600">We accept returns within 7 days of delivery if the flowers are damaged or not as described. Please contact our customer service team for assistance with returns.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up-2">
              <h3 className="text-xl font-semibold mb-3">Do you offer international shipping?</h3>
              <p className="text-gray-600">Yes, we offer international shipping to select countries. Shipping rates and delivery times vary by location. Please check our shipping information page for details.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up-3">
              <h3 className="text-xl font-semibold mb-3">How can I customize my bouquet?</h3>
              <p className="text-gray-600">You can customize your bouquet by selecting specific flowers, colors, and arrangements through our Custom Bouquets section. You can also add a personal message to your order.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from { 
            opacity: 0;
            transform: translateX(-50px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from { 
            opacity: 0;
            transform: translateX(50px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-fade-in-delayed {
          animation: fadeIn 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-up-0 {
          animation: fadeInUp 0.8s ease-out 0.1s both;
        }
        
        .animate-fade-in-up-1 {
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }
        
        .animate-fade-in-up-2 {
          animation: fadeInUp 0.8s ease-out 0.5s both;
        }
        
        .animate-fade-in-up-3 {
          animation: fadeInUp 0.8s ease-out 0.7s both;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Contact; 