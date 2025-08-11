
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { PRODUCERS, PRODUCTS, ORDERS } from '../constants';
import { Product, Order, OrderStatus } from '../types';

const DashboardSales: React.FC<{orders: Order[]}> = ({ orders }) => {
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    const totalOrders = orders.length;
    const deliveredOrders = orders.filter(o => o.status === OrderStatus.Delivered).length;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-100 dark:bg-green-900/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">Revenu Total</h3>
                <p className="text-3xl font-bold text-green-900 dark:text-green-100 mt-2">{totalRevenue.toLocaleString()} FCFA</p>
            </div>
             <div className="bg-blue-100 dark:bg-blue-900/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Commandes Totales</h3>
                <p className="text-3xl font-bold text-blue-900 dark:text-blue-100 mt-2">{totalOrders}</p>
            </div>
             <div className="bg-yellow-100 dark:bg-yellow-900/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">Commandes Livrées</h3>
                <p className="text-3xl font-bold text-yellow-900 dark:text-yellow-100 mt-2">{deliveredOrders}</p>
            </div>
        </div>
    );
};

const DashboardProducts: React.FC<{products: Product[]}> = ({ products }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Mes Produits</h2>
                <button className="bg-benin-green text-white px-4 py-2 rounded-md hover:bg-green-700">Ajouter un produit</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Produit</th>
                            <th scope="col" className="px-6 py-3">Prix</th>
                            <th scope="col" className="px-6 py-3">Stock</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(p => (
                            <tr key={p.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{p.name}</td>
                                <td className="px-6 py-4">{p.price} FCFA / {p.unit}</td>
                                <td className="px-6 py-4">{p.stock}</td>
                                <td className="px-6 py-4 space-x-2">
                                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Modifier</button>
                                    <button className="font-medium text-red-600 dark:text-red-500 hover:underline">Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const DashboardOrders: React.FC<{orders: Order[]}> = ({ orders }) => {
    const statusColor = (status: OrderStatus) => {
        switch(status) {
            case OrderStatus.Delivered: return 'bg-green-100 text-green-800';
            case OrderStatus.Shipped: return 'bg-blue-100 text-blue-800';
            case OrderStatus.Preparing: return 'bg-yellow-100 text-yellow-800';
            case OrderStatus.Pending: return 'bg-gray-100 text-gray-800';
            case OrderStatus.Cancelled: return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    }
    return (
         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Commandes Récentes</h2>
             <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">ID Commande</th>
                            <th scope="col" className="px-6 py-3">Client</th>
                            <th scope="col" className="px-6 py-3">Total</th>
                            <th scope="col" className="px-6 py-3">Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(o => (
                            <tr key={o.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{o.id}</td>
                                <td className="px-6 py-4">{o.customerName}</td>
                                <td className="px-6 py-4">{o.total.toLocaleString()} FCFA</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColor(o.status)}`}>{o.status}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export const DashboardPage: React.FC = () => {
    const { isAuthenticated, isProducer, currentUser } = useAuth();
    const [activeTab, setActiveTab] = useState('sales');

    if (!isAuthenticated || !isProducer || !currentUser) {
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl font-bold">Accès non autorisé</h1>
                <p className="mt-2">Vous devez être connecté en tant que producteur pour voir cette page.</p>
                <Link to="/" className="text-benin-green hover:underline mt-4 inline-block">Retour à l'accueil</Link>
            </div>
        );
    }

    const producerProducts = PRODUCTS.filter(p => p.producerId === currentUser.id);
    const producerOrders = ORDERS; // In a real app, this would be filtered by producer

    const tabs = [
        { id: 'sales', label: 'Ventes' },
        { id: 'products', label: 'Produits' },
        { id: 'orders', label: 'Commandes' },
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Tableau de bord</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Bienvenue, {currentUser.name}!</p>
            
            <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`${
                                activeTab === tab.id
                                    ? 'border-benin-green text-benin-green'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600'
                            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="space-y-8">
                {activeTab === 'sales' && <DashboardSales orders={producerOrders} />}
                {activeTab === 'products' && <DashboardProducts products={producerProducts} />}
                {activeTab === 'orders' && <DashboardOrders orders={producerOrders} />}
            </div>
        </div>
    );
};
