import React, { useState } from 'react';
import { Plant } from '../types';
import PlantCareInfo from './PlantCareInfo';
import { InfoIcon } from './icons/MiscIcons';

interface PlantCardProps {
  plant: Plant;
  onAddToCart: (plant: Plant) => void;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
};

const PlantCard: React.FC<PlantCardProps> = ({ plant, onAddToCart }) => {
  const [showCareInfo, setShowCareInfo] = useState(false);

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
        <div className="overflow-hidden h-64 relative">
          <img src={plant.imageUrl} alt={plant.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" />
          <button 
            onClick={() => setShowCareInfo(true)}
            className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-brand-green transition-colors"
            aria-label={`Info perawatan untuk ${plant.name}`}
            title="Info Perawatan"
          >
            <InfoIcon className="w-5 h-5"/>
          </button>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold font-serif text-brand-green dark:text-green-300 mb-2">{plant.name}</h3>
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
            <p><span className="font-medium">Harga Beli:</span> {formatCurrency(plant.price)}</p>
            <p><span className="font-medium">Harga Sewa:</span> {formatCurrency(plant.rentalPrice)}/bln</p>
          </div>
          <div className="mt-auto">
            <button
              onClick={() => onAddToCart(plant)}
              className="w-full block text-center bg-brand-green hover:bg-brand-green-dark text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
            >
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
      {showCareInfo && (
        <PlantCareInfo 
          plantName={plant.name} 
          onClose={() => setShowCareInfo(false)}
        />
      )}
    </>
  );
};

export default PlantCard;