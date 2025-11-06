import React, { useState } from 'react';
import { Plant } from '../types';
import PlantCard from '../components/PlantCard';

interface ShopPageProps {
  plants: Plant[];
  onAddToCart: (plant: Plant) => void;
}

type Category = 'all' | 'indoor' | 'outdoor' | 'mini' | 'premium';

const ShopPage: React.FC<ShopPageProps> = ({ plants, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'Semua' },
    { key: 'indoor', label: 'Indoor' },
    { key: 'outdoor', label: 'Outdoor' },
    { key: 'mini', label: 'Mini' },
    { key: 'premium', label: 'Premium' },
  ];

  const filteredPlants = plants
    .filter(plant => activeCategory === 'all' || plant.category === activeCategory)
    .filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="py-20 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold font-serif text-brand-text-light dark:text-brand-text-dark">Katalog Tanaman</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Temukan tanaman yang sempurna untuk Anda.</p>
        </div>

        {/* Filters and Search */}
        <div className="mb-10 flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeCategory === key
                    ? 'bg-brand-green text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="w-full md:w-auto">
              <input 
                  type="text"
                  placeholder="Cari tanaman..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-64 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 focus:ring-brand-green focus:border-brand-green"
              />
          </div>
        </div>

        {/* Plant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPlants.map(plant => (
            <PlantCard key={plant.id} plant={plant} onAddToCart={onAddToCart} />
          ))}
        </div>
        {filteredPlants.length === 0 && (
          <div className="col-span-full text-center py-16 text-gray-500 dark:text-gray-400">
              <p className="text-xl">Oops!</p>
              <p>Tidak ada tanaman yang cocok dengan pencarian Anda.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;