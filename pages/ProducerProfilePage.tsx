
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCERS, PRODUCTS } from '../constants';
import { StarRating } from '../components/StarRating';
import { ProductCard } from '../components/ProductCard';

export const ProducerProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const producer = PRODUCERS.find(p => p.id === id);

  if (!producer) {
    return <div className="text-center py-20">Producteur non trouvé</div>;
  }

  const producerProducts = PRODUCTS.filter(p => p.producerId === producer.id);

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Profile Header */}
      <section className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="md:flex md:items-center">
            <div className="md:w-1/4 flex justify-center md:justify-start">
              <img src={producer.profileImage} alt={producer.name} className="h-40 w-40 rounded-full object-cover border-4 border-benin-yellow shadow-lg" />
            </div>
            <div className="md:w-3/4 mt-6 md:mt-0 md:ml-8 text-center md:text-left">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">{producer.name}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">{producer.location}</p>
              <div className="flex justify-center md:justify-start items-center mt-2 space-x-2">
                <StarRating rating={producer.rating} />
                <span className="text-gray-500 dark:text-gray-400">({producer.rating}/5)</span>
              </div>
              <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
                {producer.specialties.map(spec => (
                  <span key={spec} className="px-3 py-1 bg-benin-green/10 text-benin-green text-sm font-medium rounded-full">{spec}</span>
                ))}
                {producer.certifications.map(cert => (
                  <span key={cert} className="px-3 py-1 bg-benin-yellow/20 text-yellow-800 dark:text-yellow-300 text-sm font-medium rounded-full">{cert}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Producer Story & Products */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Notre Histoire</h2>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{producer.story}</p>
              <p className="mt-4 text-gray-700 dark:text-gray-300"><strong>Expérience:</strong> {producer.experience} ans</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
                <h2 className="text-2xl font-bold mb-4">Notre Ferme</h2>
                <div className="grid grid-cols-2 gap-2">
                    {producer.farmImages.map((img, index) => (
                        <img key={index} src={img} alt={`Ferme de ${producer.name}`} className="w-full h-32 object-cover rounded-md"/>
                    ))}
                </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Nos Produits</h2>
            {producerProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {producerProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 dark:text-gray-400">Ce producteur n'a pas encore de produits en ligne.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
