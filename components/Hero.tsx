import React from 'react';
import { Page } from '../App';

interface HeroProps {
  setCurrentPage: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img 
        src="https://media.istockphoto.com/id/1211420672/id/foto/desain-interior-vintage-ruang-tamu-dengan-furnitur-retro-bergaya-banyak-tanaman-komoditas-jam.webp?a=1&b=1&s=612x612&w=0&k=20&c=ckVpQTYU6GNHw-ruxd3e5JTaHE2YR5TdRsd2Irzxj7k=" 
        alt="Ruangan penuh tanaman hias yang rimbun" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="relative z-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 text-shadow-lg leading-tight">
          Hadirkan Alam di Setiap Ruangan
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-shadow">
          Temukan koleksi tanaman hias terbaik untuk menyegarkan dan memperindah rumah, kantor, atau acaramu.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => setCurrentPage('shop')}
            className="w-full sm:w-auto bg-brand-green hover:bg-brand-green-dark text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Lihat Koleksi
          </button>
          <button 
            onClick={() => setCurrentPage('services')}
            className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-brand-green-dark text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Sewa Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;