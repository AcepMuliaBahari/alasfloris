import React, { useState } from 'react';
import { Plant } from '../../types';
import { TrashIcon } from '../icons/MiscIcons';

interface PlantManagerProps {
    plants: Plant[];
    onAddPlant: (plant: Omit<Plant, 'id'>) => void;
    onDeletePlant: (plantId: number) => void;
}

const PlantManager: React.FC<PlantManagerProps> = ({ plants, onAddPlant, onDeletePlant }) => {
    const [newPlant, setNewPlant] = useState({ name: '', category: 'indoor' as Plant['category'], imageUrl: '', price: 0, rentalPrice: 0 });
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewPlant(prev => ({ ...prev, [name]: name === 'price' || name === 'rentalPrice' ? Number(value) : value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newPlant.name || !newPlant.imageUrl || newPlant.price <= 0) {
            alert('Harap isi semua field yang wajib diisi.');
            return;
        }
        onAddPlant(newPlant);
        setNewPlant({ name: '', category: 'indoor', imageUrl: '', price: 0, rentalPrice: 0 });
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4 font-serif text-brand-green dark:text-green-300">Manajemen Katalog Tanaman</h2>
            
            {/* Add Plant Form */}
            <form onSubmit={handleSubmit} className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-end p-4 border rounded-lg dark:border-gray-700">
                <input name="name" value={newPlant.name} onChange={handleInputChange} placeholder="Nama Tanaman" required className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md"/>
                <input name="imageUrl" value={newPlant.imageUrl} onChange={handleInputChange} placeholder="URL Gambar" required className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md"/>
                <select name="category" value={newPlant.category} onChange={handleInputChange} className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md">
                    <option value="indoor">Indoor</option>
                    <option value="outdoor">Outdoor</option>
                    <option value="mini">Mini</option>
                    <option value="premium">Premium</option>
                </select>
                <input type="number" name="price" value={newPlant.price} onChange={handleInputChange} placeholder="Harga Beli" required className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md"/>
                <input type="number" name="rentalPrice" value={newPlant.rentalPrice} onChange={handleInputChange} placeholder="Harga Sewa" required className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md"/>
                <button type="submit" className="w-full bg-brand-green text-white font-semibold py-2 px-4 rounded-md hover:bg-brand-green-dark transition-colors">Tambah Tanaman</button>
            </form>

            {/* Plant List */}
            <div className="space-y-3 max-h-96 overflow-y-auto">
                {plants.map(plant => (
                    <div key={plant.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                        <div className="flex items-center gap-4">
                            <img src={plant.imageUrl} alt={plant.name} className="w-12 h-12 object-cover rounded"/>
                            <span className="font-medium text-brand-text-light dark:text-brand-text-dark">{plant.name}</span>
                        </div>
                        <button onClick={() => onDeletePlant(plant.id)} className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors">
                            <TrashIcon className="w-5 h-5"/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlantManager;