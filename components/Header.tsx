
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { ShoppingCartIcon, UserIcon, SunIcon, MoonIcon, MenuIcon, XIcon, SearchIcon } from './Icons';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { cartCount } = useCart();
  const { isAuthenticated, isProducer, logout, loginAsProducer } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/market?search=${searchTerm.trim()}`);
    }
  };

  // Mock login for demonstration
  const handleLogin = () => {
      loginAsProducer('p1'); // Login as the first producer
  };

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Marché', path: '/market' },
    { name: 'Producteurs', path: '/producers' },
    { name: 'À Propos', path: '/about' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img className="h-10 w-auto" src="/logo.svg" alt="AgriMarket Bénin Logo" />
              <span className="text-2xl font-bold text-benin-green">AgriMarket</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? 'bg-benin-green text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            {isProducer && (
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium ${
                        isActive
                        ? 'bg-benin-yellow text-gray-900'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`
                    }
                >
                    Tableau de bord
                </NavLink>
            )}
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <form onSubmit={handleSearch} className="hidden sm:flex items-center relative">
                <input 
                    type="text"
                    placeholder="Rechercher un produit..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-32 lg:w-48 pl-4 pr-10 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-benin-green"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                    <SearchIcon className="h-5 w-5"/>
                </button>
            </form>
            <button onClick={toggleTheme} className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
            </button>

            <Link to="/cart" className="relative p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              <ShoppingCartIcon className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-benin-red text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {isAuthenticated ? (
                <button onClick={logout} className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <UserIcon className="h-6 w-6 text-benin-green" />
                </button>
            ) : (
                <button onClick={handleLogin} className="hidden md:block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Connexion
                </button>
            )}

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-700 dark:text-gray-300">
                {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-benin-green text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                >
                  {link.name}
                </NavLink>
              ))}
               {isProducer && (
                <NavLink
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-benin-yellow text-gray-900' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                >
                    Tableau de bord
                </NavLink>
               )}
               {isAuthenticated ? (
                    <button onClick={() => { logout(); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                        Déconnexion
                    </button>
                ) : (
                    <button onClick={() => { handleLogin(); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                        Connexion
                    </button>
                )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Create a dummy logo.svg if it doesn't exist
const fs = 'fs';
if(typeof window !== 'undefined' && !document.querySelector('link[href="/logo.svg"]')) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#008753" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 12c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zM12 18s-4 4-10 4M22 18s-6 4-10 4m0-16s4-4 10-4M2 2s6-4 10-4"></path></svg>`;
  const blob = new Blob([svg], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const existingScript = document.querySelector('script[src="/index.tsx"]');
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = url;
  if(existingScript && existingScript.parentNode){
     const logoImg = document.createElement('img');
     logoImg.src = url;
     logoImg.id = "logo-img-placeholder";
     logoImg.style.display = 'none';
     document.body.appendChild(logoImg);
  }
}
