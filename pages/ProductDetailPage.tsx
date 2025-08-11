
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, PRODUCERS } from '../constants';
import { Producer, Product } from '../types';
import { StarRating } from '../components/StarRating';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return <div className="text-center py-20">Produit non trouvé</div>;
  }
  
  const producer = PRODUCERS.find(p => p.id === product.producerId) as Producer;
  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div>
                    <img src={product.imageUrl} alt={product.name} className="w-full rounded-lg shadow-lg object-cover aspect-square" />
                </div>
                {/* Product Info */}
                <div>
                    <p className="text-sm font-medium text-benin-green">{product.category}</p>
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-1">{product.name}</h1>
                    <div className="mt-4">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price} FCFA</span>
                        <span className="text-base text-gray-500 dark:text-gray-400"> / {product.unit}</span>
                    </div>

                    <div className="mt-4 border-t border-b border-gray-200 dark:border-gray-700 py-4">
                        <p className="text-gray-700 dark:text-gray-300">{product.description}</p>
                    </div>

                    <div className="mt-6 flex items-center">
                        <p className="text-sm font-medium text-gray-900 dark:text-white mr-4">Quantité:</p>
                        <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-1 text-lg font-semibold">-</button>
                            <input type="text" readOnly value={quantity} className="w-12 text-center border-l border-r border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none"/>
                            <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 text-lg font-semibold">+</button>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <button 
                            onClick={handleAddToCart}
                            className="w-full bg-benin-green text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-green-700 transition-colors"
                        >
                            Ajouter au Panier
                        </button>
                    </div>

                    <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center">
                            <img src={producer.profileImage} alt={producer.name} className="h-16 w-16 rounded-full object-cover"/>
                            <div className="ml-4">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Vendu par</p>
                                <Link to={`/producer/${producer.id}`} className="text-lg font-semibold text-gray-900 dark:text-white hover:underline">{producer.name}</Link>
                                <StarRating rating={producer.rating}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <div className="mt-20">
                <h2 className="text-3xl font-bold text-center mb-10">Produits similaires</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {relatedProducts.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};
