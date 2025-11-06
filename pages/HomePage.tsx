import React from 'react';
import Hero from '../components/Hero';
import { Page } from '../App';
import PlantCard from '../components/PlantCard';
import ServiceCard from '../components/ServiceCard';
import { Plant, Service } from '../types';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
  plants: Plant[];
  services: Service[];
  onAddToCart: (plant: Plant) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, plants, services, onAddToCart }) => {
  return (
    <div>
      <Hero setCurrentPage={setCurrentPage} />
      
      {/* Featured Products Section */}
      <div className="py-20 bg-stone-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold font-serif text-brand-text-light dark:text-brand-text-dark">Koleksi Pilihan</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Tanaman terlaris yang siap menghijaukan ruangan Anda.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {plants.slice(0, 4).map(plant => (
                  <PlantCard key={plant.id} plant={plant} onAddToCart={onAddToCart} />
                ))}
            </div>
             <div className="mt-12 text-center">
                <button
                    onClick={() => setCurrentPage('shop')}
                    className="bg-brand-green hover:bg-brand-green-dark text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    Lihat Semua Koleksi
                </button>
            </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold font-serif text-brand-text-light dark:text-brand-text-dark">Layanan Kami</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Menyediakan solusi hijau yang lengkap dan profesional.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                {services.map(service => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
             <div className="mt-12 text-center">
                <button
                    onClick={() => setCurrentPage('services')}
                    className="bg-brand-green hover:bg-brand-green-dark text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    Selengkapnya Tentang Layanan
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;