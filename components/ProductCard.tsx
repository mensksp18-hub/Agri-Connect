
import React from 'react';
import { Link } from 'react-router-dom';
import { Product, Producer } from '../types';
import { useCart } from '../context/CartContext';
import { PRODUCERS } from '../constants';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const producer = PRODUCERS.find(p => p.id === product.producerId) as Producer;

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <Link to={`/product/${product.id}`} className="block">
        <img className="w-full h-48 object-cover" src={product.imageUrl} alt={product.name} />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">
            <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            Vendu par <Link to={`/producer/${producer.id}`} className="text-benin-green hover:underline">{producer.name}</Link>
        </p>
        <div className="mt-auto">
          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              {product.price} <span className="text-sm font-normal">FCFA / {product.unit}</span>
            </p>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full mt-4 bg-benin-green text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-800"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};
