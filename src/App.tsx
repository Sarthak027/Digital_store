import React, { useState, useMemo } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { products } from './data/products';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        
        <Hero />
        
        <FeaturedSection products={products} />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedCategory === 'all' ? 'All Products' : `${selectedCategory.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Products`}
            </h2>
            <p className="text-gray-600">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>
          
          <ProductGrid products={filteredProducts} />
        </main>
        
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;