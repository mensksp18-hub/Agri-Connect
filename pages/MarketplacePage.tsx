
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { FilterSidebar } from '../components/FilterSidebar';
import { PRODUCTS } from '../constants';
import { ProductCategory } from '../types';
import { useDebounce } from '../hooks/useDebounce';
import { SearchIcon } from '../components/Icons';

export const MarketplacePage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    
    const maxPrice = useMemo(() => Math.max(...PRODUCTS.map(p => p.price)), []);
    const [priceRange, setPriceRange] = useState({ min: 0, max: maxPrice });

    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    useEffect(() => {
        setPriceRange({ min: 0, max: maxPrice });
    }, [maxPrice]);
    
    const handleCategoryChange = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPriceRange(prev => ({ ...prev, [e.target.name]: Number(e.target.value) }));
    }

    const filteredProducts = useMemo(() => {
        return PRODUCTS.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) || 
                                  product.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
            const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
            return matchesSearch && matchesCategory && matchesPrice;
        });
    }, [debouncedSearchTerm, selectedCategories, priceRange]);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Le Marché</h1>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Trouvez les meilleurs produits de nos agriculteurs locaux.</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8">
                <aside className="lg:w-1/4 xl:w-1/5">
                    <FilterSidebar 
                        categories={Object.values(ProductCategory)}
                        selectedCategories={selectedCategories}
                        onCategoryChange={handleCategoryChange}
                        priceRange={priceRange}
                        onPriceChange={handlePriceChange}
                        maxPrice={maxPrice}
                    />
                </aside>

                <main className="lg:w-3/4 xl:w-4/5">
                    <div className="mb-6 relative">
                         <input 
                            type="text"
                            placeholder="Rechercher par nom, mot-clé..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-benin-green"
                        />
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <SearchIcon className="h-6 w-6"/>
                        </div>
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-gray-100 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-2xl font-semibold">Aucun produit trouvé</h3>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">Essayez d'ajuster vos filtres ou votre recherche.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};
