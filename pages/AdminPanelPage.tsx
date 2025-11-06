import React from 'react';
import PlantManager from '../components/admin/PlantManager';
import GalleryManager from '../components/admin/GalleryManager';
import { Plant, GalleryImage } from '../types';

interface AdminPanelPageProps {
  onLogout: () => void;
  plants: Plant[];
  gallery: GalleryImage[];
  onAddPlant: (plant: Omit<Plant, 'id'>) => void;
  onDeletePlant: (plantId: number) => void;
  onAddImage: (image: Omit<GalleryImage, 'id'>) => void;
  onDeleteImage: (imageId: number) => void;
}

const AdminPanelPage: React.FC<AdminPanelPageProps> = ({ 
  onLogout,
  plants,
  gallery,
  onAddPlant,
  onDeletePlant,
  onAddImage,
  onDeleteImage
}) => {
  return (
    <div className="p-4 sm:p-8 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold font-serif text-brand-text-light dark:text-brand-text-dark">Admin Panel</h1>
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
        <div className="space-y-12">
          <PlantManager plants={plants} onAddPlant={onAddPlant} onDeletePlant={onDeletePlant} />
          <GalleryManager gallery={gallery} onAddImage={onAddImage} onDeleteImage={onDeleteImage} />
        </div>
      </div>
    </div>
  );
};

export default AdminPanelPage;