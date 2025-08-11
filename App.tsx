
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MarketplacePage } from './pages/MarketplacePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProducerProfilePage } from './pages/ProducerProfilePage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage, OrderConfirmationPage } from './pages/CheckoutPage';
import { DashboardPage } from './pages/DashboardPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { PRODUCERS } from './constants';
import { ProducerCard } from './components/ProducerCard';

// Dummy page for listing all producers
const ProducersPage: React.FC = () => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-center mb-10">Nos Producteurs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCERS.map(p => <ProducerCard key={p.id} producer={p}/>)}
        </div>
    </div>
);


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <HashRouter>
            <div className="flex flex-col min-h-screen text-gray-800 dark:text-gray-200">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/market" element={<MarketplacePage />} />
                  <Route path="/producers" element={<ProducersPage />} />
                  <Route path="/product/:id" element={<ProductDetailPage />} />
                  <Route path="/producer/:id" element={<ProducerProfilePage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </HashRouter>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
