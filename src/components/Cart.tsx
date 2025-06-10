import React from 'react';
import { X, Minus, Plus, ShoppingBag, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, removeFromCart, total, itemCount, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold text-gray-900">
                Shopping Cart ({itemCount})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-500">Add some products to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 truncate">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500">${item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-1 hover:bg-gray-200 rounded">
                        <Minus className="w-4 h-4 text-gray-500" />
                      </button>
                      <span className="text-sm font-medium">{item.quantity}</span>
                      <button className="p-1 hover:bg-gray-200 rounded">
                        <Plus className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1 hover:bg-red-100 rounded text-red-500"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">Total:</span>
                <span className="text-2xl font-bold text-purple-600">${total.toFixed(2)}</span>
              </div>
              
              <div className="space-y-2">
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <CreditCard className="w-5 h-5" />
                  <span>Checkout</span>
                </button>
                
                <button
                  onClick={clearCart}
                  className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;