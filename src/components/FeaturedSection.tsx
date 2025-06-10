import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface FeaturedSectionProps {
  products: Product[];
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ products }) => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 3);

  if (featuredProducts.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and highly-rated digital assets, 
            carefully selected to help you build amazing projects faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
            <span>View All Products</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;