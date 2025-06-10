import React from 'react';
import { Star, Download, ShoppingCart, Tag } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const categoryColors = {
    template: 'bg-blue-100 text-blue-800',
    boilerplate: 'bg-green-100 text-green-800',
    component: 'bg-purple-100 text-purple-800',
    'landing-page': 'bg-orange-100 text-orange-800',
    saas: 'bg-red-100 text-red-800',
  };

  const formatCategory = (category: string) => {
    return category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.featured && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
        {discountPercentage > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            -{discountPercentage}%
          </div>
        )}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => addToCart(product)}
            className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryColors[product.category]}`}>
            {formatCategory(product.category)}
          </span>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Download className="w-4 h-4" />
            <span>{product.downloads.toLocaleString()}</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
          {product.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {product.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-700"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
          {product.tags.length > 3 && (
            <span className="text-xs text-gray-500">+{product.tags.length - 3} more</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-900">{product.rating}</span>
            </div>
          </div>
          
          <div className="text-right">
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through mr-2">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>
          </div>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;