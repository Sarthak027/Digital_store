import React from 'react';
import { ArrowRight, Star, Download, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Premium Digital Assets
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              For Modern Developers
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Discover high-quality templates, boilerplates, components, and SaaS solutions 
            built with cutting-edge technologies to accelerate your projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-white text-purple-900 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center space-x-2">
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Documentation
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-2xl font-bold">4.8</span>
              </div>
              <p className="text-purple-200">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                <Download className="w-5 h-5 text-blue-400" />
                <span className="text-2xl font-bold">15K+</span>
              </div>
              <p className="text-purple-200">Downloads</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-2xl font-bold">5K+</span>
              </div>
              <p className="text-purple-200">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;