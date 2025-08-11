
import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
          À Propos d'AgriMarket Bénin
        </h1>
        <div className="prose dark:prose-invert lg:prose-xl mx-auto text-gray-700 dark:text-gray-300">
          <p>
            AgriMarket Bénin est né d'une vision simple : créer un pont direct entre les agriculteurs travailleurs du Bénin et les consommateurs à la recherche de produits frais, locaux et de qualité. Nous croyons au pouvoir de la technologie pour transformer les vies et renforcer les communautés locales.
          </p>
          <h2 className="text-gray-900 dark:text-white">Notre Mission</h2>
          <p>
            Notre mission est de valoriser le travail des producteurs béninois en leur offrant une plateforme moderne et équitable pour vendre leurs récoltes. Nous voulons garantir aux agriculteurs des revenus justes tout en offrant aux consommateurs une transparence totale sur l'origine et la qualité de leur nourriture.
          </p>
          <h2 className="text-gray-900 dark:text-white">Notre Vision</h2>
          <p>
            Nous aspirons à devenir la première marketplace agricole du Bénin, un écosystème où chaque transaction soutient l'agriculture durable, promeut la sécurité alimentaire et célèbre la richesse du terroir béninois. Nous visons un avenir où chaque foyer peut facilement accéder à des aliments sains et où chaque agriculteur peut prospérer grâce à son travail.
          </p>
        </div>
      </div>
    </div>
  );
};
