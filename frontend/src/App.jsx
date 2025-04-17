import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import PageTransition from './components/PageTransition';

function App() {
  return (
    <Router>
      <CartProvider>
        <WishlistProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={
                  <PageTransition animation="fadeIn">
                    <Home />
                  </PageTransition>
                } />
                <Route path="/products" element={
                  <PageTransition animation="fadeUp">
                    <Products />
                  </PageTransition>
                } />
                <Route path="/categories" element={
                  <PageTransition animation="slideInRight">
                    <Categories />
                  </PageTransition>
                } />
                <Route path="/about" element={
                  <PageTransition animation="slideInLeft">
                    <About />
                  </PageTransition>
                } />
                <Route path="/contact" element={
                  <PageTransition animation="zoomIn">
                    <Contact />
                  </PageTransition>
                } />
                <Route path="/cart" element={
                  <PageTransition animation="fadeUp">
                    <Cart />
                  </PageTransition>
                } />
                <Route path="/wishlist" element={
                  <PageTransition animation="fadeUp">
                    <Wishlist />
                  </PageTransition>
                } />
              </Routes>
            </main>
            <Footer />
          </div>
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}

export default App; 