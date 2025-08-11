
import React from 'react';
import { ProductCategory } from '../types';

interface FilterSidebarProps {
  categories: ProductCategory[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  priceRange: { min: number, max: number };
  onPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxPrice: number;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
  categories, 
  selectedCategories, 
  onCategoryChange,
  priceRange,
  onPriceChange,
  maxPrice
}) => {
  return (
    <div className="w-full lg:w-64 xl:w-72 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-fit">
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Filtres</h3>
      
      {/* Categories */}
      <div>
        <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Catégories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <input
                id={`cat-${category}`}
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => onCategoryChange(category)}
                className="h-4 w-4 rounded border-gray-300 text-benin-green focus:ring-benin-green"
              />
              <label htmlFor={`cat-${category}`} className="ml-3 text-sm text-gray-600 dark:text-gray-300">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mt-6">
        <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Prix (FCFA)</h4>
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>0</span>
            <span>{priceRange.max}</span>
        </div>
        <input
          type="range"
          min="0"
          max={maxPrice}
          name="max"
          value={priceRange.max}
          onChange={onPriceChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 [&::-webkit-slider-thumb]:bg-benin-green"
        />
      </div>
    </div>
  );
};
