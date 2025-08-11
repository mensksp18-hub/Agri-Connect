
import React, { useState } from 'react';
import { ChevronDownIcon } from '../components/Icons';

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-6">
      <dt>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-start justify-between text-left text-gray-600 dark:text-gray-300"
        >
          <span className="font-medium text-lg text-gray-900 dark:text-white">{question}</span>
          <span className="ml-6 flex h-7 items-center">
            <ChevronDownIcon
              className={`${
                isOpen ? '-rotate-180' : 'rotate-0'
              } h-6 w-6 transform transition-transform duration-200`}
            />
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className="mt-2 pr-12">
          <p className="text-base text-gray-600 dark:text-gray-400">{children}</p>
        </dd>
      )}
    </div>
  );
};


export const FAQPage: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-white/10">
          <h2 className="text-4xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white">Foire Aux Questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-white/10">
            <FAQItem question="Comment puis-je passer une commande ?">
                Pour passer une commande, parcourez simplement notre marché, ajoutez les produits souhaités à votre panier, puis suivez les étapes du processus de paiement. Vous devrez fournir vos informations de livraison et choisir un mode de paiement.
            </FAQItem>
            <FAQItem question="Quels sont les modes de paiement acceptés ?">
                Nous acceptons plusieurs modes de paiement pour votre commodité, y compris MTN Mobile Money, Moov Money, le paiement à la livraison pour certaines commandes, et les virements bancaires pour les commandes en gros volume.
            </FAQItem>
             <FAQItem question="Comment puis-je devenir un vendeur sur AgriMarket ?">
                Nous sommes ravis d'accueillir de nouveaux producteurs ! Veuillez visiter notre page "Devenir Vendeur" ou nous contacter directement via notre formulaire de contact pour commencer le processus d'inscription. Nous examinerons votre demande et vous recontacterons.
            </FAQItem>
             <FAQItem question="Puis-je suivre ma commande ?">
                Oui. Une fois votre commande confirmée, vous recevrez un lien de suivi. Vous pourrez également consulter le statut de votre commande à tout moment depuis votre historique d'achats dans votre compte client.
            </FAQItem>
          </dl>
        </div>
      </div>
    </div>
  );
};
