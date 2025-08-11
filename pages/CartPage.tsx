
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCartIcon } from '../components/Icons';

export const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount, clearCart } = useCart();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">Votre Panier</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center bg-white dark:bg-gray-800 p-12 rounded-lg shadow-md">
            <ShoppingCartIcon className="h-24 w-24 mx-auto text-gray-300 dark:text-gray-600" />
            <h2 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">Votre panier est vide</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Parcourez notre marché pour trouver des produits frais.</p>
            <Link 
              to="/market"
              className="mt-6 inline-block bg-benin-green text-white font-bold py-3 px-6 rounded-md hover:bg-green-700 transition-colors"
            >
              Aller au marché
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={item.id} className={`p-6 flex flex-col sm:flex-row items-center gap-6 ${index > 0 ? 'border-t border-gray-200 dark:border-gray-700' : ''}`}>
                      <img src={item.imageUrl} alt={item.name} className="h-24 w-24 rounded-md object-cover"/>
                      <div className="flex-grow text-center sm:text-left">
                        <Link to={`/product/${item.id}`} className="text-lg font-semibold text-gray-900 dark:text-white hover:text-benin-green">{item.name}</Link>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.category}</p>
                      </div>
                      <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-lg font-semibold">-</button>
                          <input type="text" readOnly value={item.quantity} className="w-12 text-center border-l border-r border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none"/>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-lg font-semibold">+</button>
                      </div>
                      <p className="font-semibold text-gray-900 dark:text-white text-lg">{item.price * item.quantity} FCFA</p>
                      <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={clearCart} className="text-sm text-red-500 hover:text-red-700 hover:underline">Vider le panier</button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">Résumé de la commande</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Sous-total ({cartCount} articles)</span>
                    <span>{cartTotal} FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frais de livraison</span>
                    <span>Calculés à la prochaine étape</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{cartTotal} FCFA</span>
                  </div>
                </div>
                <Link to="/checkout">
                  <button className="w-full mt-6 bg-benin-green text-white font-bold py-3 px-6 rounded-md hover:bg-green-700 transition-colors">
                    Passer à la caisse
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
