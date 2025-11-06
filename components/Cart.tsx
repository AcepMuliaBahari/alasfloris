import React from 'react';
import { CartItem } from '../types';
import { SHOPEE_LINK } from '../constants';
import { CloseIcon, TrashIcon } from './icons/MiscIcons';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemove: (plantId: number) => void;
  onUpdateQuantity: (plantId: number, newQuantity: number) => void;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
};

const Cart: React.FC<CartProps> = ({ isOpen, onClose, cartItems, onRemove, onUpdateQuantity }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>

      {/* Cart Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-brand-bg-dark shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-5 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold font-serif text-brand-green dark:text-green-300">Keranjang Anda</h2>
            <button onClick={onClose} className="p-2 text-gray-500 dark:text-gray-400 hover:text-brand-green dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-grow overflow-y-auto p-5">
            {cartItems.length === 0 ? (
              <div className="text-center text-gray-500 dark:text-gray-400 h-full flex flex-col justify-center">
                <p className="text-lg">Keranjang Anda kosong.</p>
                <p className="text-sm mt-2">Mulai tambahkan tanaman favoritmu!</p>
              </div>
            ) : (
              <ul className="space-y-4">
                {cartItems.map(item => (
                  <li key={item.id} className="flex items-center space-x-4 p-2 rounded-md bg-gray-50 dark:bg-gray-800">
                    <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                    <div className="flex-grow">
                      <h3 className="font-semibold text-brand-text-light dark:text-brand-text-dark">{item.name}</h3>
                      <p className="text-sm text-brand-green dark:text-green-400">{formatCurrency(item.price)}</p>
                      <div className="flex items-center mt-2">
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 border rounded-l-md dark:border-gray-600">-</button>
                        <span className="px-3 py-1 border-t border-b dark:border-gray-600">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 border rounded-r-md dark:border-gray-600">+</button>
                      </div>
                    </div>
                    <button onClick={() => onRemove(item.id)} className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-brand-text-light dark:text-brand-text-dark">Total</span>
                <span className="text-xl font-bold text-brand-green dark:text-green-300">{formatCurrency(totalPrice)}</span>
              </div>
              <a 
                href={SHOPEE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-brand-green hover:bg-brand-green-dark text-white font-semibold py-3 px-4 rounded-full shadow-lg transition-colors duration-300"
              >
                Checkout di Shopee
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
