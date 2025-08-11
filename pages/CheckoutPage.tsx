
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export const CheckoutPage: React.FC = () => {
    const { cartItems, cartTotal, clearCart } = useCart();
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleCheckout = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would process the payment and create an order
        console.log("Order placed!");
        clearCart();
        navigate('/order-confirmation'); // Redirect to a confirmation page
    }

    if (cartItems.length === 0 && step !== 3) {
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl font-bold">Votre panier est vide.</h1>
                <Link to="/market" className="text-benin-green hover:underline mt-4 inline-block">Retourner au marché</Link>
            </div>
        )
    }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">Finaliser ma commande</h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <form onSubmit={handleCheckout}>
                {/* Step 1: Delivery Information */}
                <div className={step === 1 ? 'block' : 'hidden'}>
                    <h2 className="text-2xl font-bold mb-6">1. Informations de livraison</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Prénom</label>
                            <input type="text" required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 shadow-sm focus:border-benin-green focus:ring-benin-green"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nom</label>
                            <input type="text" required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 shadow-sm focus:border-benin-green focus:ring-benin-green"/>
                        </div>
                        <div className="md:col-span-2">
                             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Adresse de livraison</label>
                             <input type="text" required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 shadow-sm focus:border-benin-green focus:ring-benin-green"/>
                        </div>
                        <div>
                             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Ville</label>
                             <input type="text" required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 shadow-sm focus:border-benin-green focus:ring-benin-green"/>
                        </div>
                         <div>
                             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Téléphone</label>
                             <input type="tel" required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 shadow-sm focus:border-benin-green focus:ring-benin-green"/>
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold mt-6 mb-2">Mode de livraison</h3>
                    <div className="space-y-2">
                        {['Livraison à domicile', 'Point de retrait', 'Retrait à la ferme'].map(method => (
                            <label key={method} className="flex items-center p-3 border rounded-md cursor-pointer has-[:checked]:bg-benin-green/10 has-[:checked]:border-benin-green">
                                <input type="radio" name="delivery" value={method} onChange={e => setDeliveryMethod(e.target.value)} className="h-4 w-4 text-benin-green focus:ring-benin-green"/>
                                <span className="ml-3">{method}</span>
                            </label>
                        ))}
                    </div>
                    <div className="mt-8 text-right">
                        <button type="button" onClick={() => setStep(2)} disabled={!deliveryMethod} className="bg-benin-green text-white font-bold py-3 px-8 rounded-md hover:bg-green-700 disabled:bg-gray-400">
                            Continuer vers le paiement
                        </button>
                    </div>
                </div>

                {/* Step 2: Payment */}
                <div className={step === 2 ? 'block' : 'hidden'}>
                     <h2 className="text-2xl font-bold mb-6">2. Paiement</h2>
                     <h3 className="text-lg font-semibold mb-2">Mode de paiement</h3>
                     <div className="space-y-2">
                        {['MTN Mobile Money', 'Moov Money', 'Paiement à la livraison', 'Virement bancaire'].map(method => (
                            <label key={method} className="flex items-center p-3 border rounded-md cursor-pointer has-[:checked]:bg-benin-green/10 has-[:checked]:border-benin-green">
                                <input type="radio" name="payment" value={method} onChange={e => setPaymentMethod(e.target.value)} className="h-4 w-4 text-benin-green focus:ring-benin-green"/>
                                <span className="ml-3">{method}</span>
                            </label>
                        ))}
                    </div>
                     <div className="mt-8 flex justify-between">
                        <button type="button" onClick={() => setStep(1)} className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white font-bold py-3 px-8 rounded-md hover:bg-gray-300">
                            Retour
                        </button>
                        <button type="submit" disabled={!paymentMethod} className="bg-benin-green text-white font-bold py-3 px-8 rounded-md hover:bg-green-700 disabled:bg-gray-400">
                            Valider la commande ({cartTotal} FCFA)
                        </button>
                    </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

// Simple order confirmation page component
export const OrderConfirmationPage: React.FC = () => {
    return (
        <div className="text-center py-20 container mx-auto">
             <div className="bg-white dark:bg-gray-800 p-12 rounded-lg shadow-lg max-w-2xl mx-auto">
                <svg className="w-24 h-24 text-benin-green mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h1 className="text-3xl font-bold mt-6">Merci pour votre commande !</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Votre commande a été passée avec succès. Vous recevrez bientôt un email de confirmation.</p>
                <Link to="/" className="mt-8 inline-block bg-benin-green text-white font-bold py-3 px-6 rounded-md hover:bg-green-700 transition-colors">
                    Retour à l'accueil
                </Link>
            </div>
        </div>
    )
}
