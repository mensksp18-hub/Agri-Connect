
import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { ProducerCard } from '../components/ProducerCard';
import { PRODUCTS, PRODUCERS } from '../constants';
import { SearchIcon } from '../components/Icons';

export const HomePage: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);
  const featuredProducers = PRODUCERS.slice(0, 3);

  return (
    <div className="text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-24 md:py-40" style={{ backgroundImage: "url('https://picsum.photos/seed/farmhero/1600/900')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Le meilleur du terroir béninois,</h1>
          <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto">directement de la ferme à votre assiette.</p>
          <div className="mt-8">
            <Link 
              to="/market" 
              className="inline-block bg-benin-green text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition-transform transform hover:scale-105"
            >
              Découvrir le marché
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Produits à la une</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/market" className="text-benin-green font-semibold hover:underline">
              Voir tous les produits &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Producers */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Nos producteurs vedettes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducers.map((producer) => (
              <ProducerCard key={producer.id} producer={producer} />
            ))}
          </div>
           <div className="text-center mt-12">
            <Link to="/producers" className="text-benin-green font-semibold hover:underline">
              Rencontrer tous nos producteurs &rarr;
            </Link>
          </div>
        </div>
      </section>
      
      {/* How it works */}
      <section className="py-16 bg-benin-green/10 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                  <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center h-24 w-24 rounded-full bg-benin-green text-white mb-4">
                          <SearchIcon className="h-12 w-12"/>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">1. Trouvez vos produits</h3>
                      <p className="text-gray-600 dark:text-gray-400">Parcourez notre marché, filtrez par catégorie et trouvez les produits frais que vous aimez.</p>
                  </div>
                  <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center h-24 w-24 rounded-full bg-benin-yellow text-gray-900 mb-4">
                        <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">2. Payez facilement</h3>
                      <p className="text-gray-600 dark:text-gray-400">Choisissez parmi nos options de paiement sécurisées, y compris Mobile Money et le paiement à la livraison.</p>
                  </div>
                   <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center h-24 w-24 rounded-full bg-benin-red text-white mb-4">
                        <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1zM3 11h10" /></svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">3. Faites-vous livrer</h3>
                      <p className="text-gray-600 dark:text-gray-400">Recevez vos produits frais directement chez vous ou dans un point de retrait proche.</p>
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
};
