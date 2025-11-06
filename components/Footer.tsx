import React from 'react';
import { FACEBOOK_LINK, INSTAGRAM_LINK, MAPS_ADDRESS, WHATSAPP_LINK } from '../constants';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './icons/SocialIcons';
import { FlowerIcon } from './icons/MiscIcons';
import { Page } from '../App';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-stone-100 dark:bg-gray-900 border-t border-stone-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
                <FlowerIcon className="h-8 w-8 text-brand-green" />
                <span className="text-xl font-bold font-serif text-brand-green dark:text-green-300">Alas Floris</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Menghadirkan keindahan dan kesegaran alam ke dalam setiap ruang Anda dengan layanan jual, sewa, dan dekorasi tanaman hias profesional.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-brand-text-light dark:text-brand-text-dark uppercase tracking-wider">Tautan</h3>
            <ul className="mt-4 space-y-2">
              <li><button onClick={() => setCurrentPage('about')} className="text-base text-gray-600 dark:text-gray-400 hover:text-brand-green dark:hover:text-white transition-colors">Tentang Kami</button></li>
              <li><button onClick={() => setCurrentPage('shop')} className="text-base text-gray-600 dark:text-gray-400 hover:text-brand-green dark:hover:text-white transition-colors">Katalog</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="text-base text-gray-600 dark:text-gray-400 hover:text-brand-green dark:hover:text-white transition-colors">Layanan</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="text-base text-gray-600 dark:text-gray-400 hover:text-brand-green dark:hover:text-white transition-colors">Kontak</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-brand-text-light dark:text-brand-text-dark uppercase tracking-wider">Kontak</h3>
            <ul className="mt-4 space-y-2 text-base text-gray-600 dark:text-gray-400">
                <li>{MAPS_ADDRESS}</li>
                <li>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-brand-green dark:hover:text-white transition-colors">
                        +62 813-8089-0148
                    </a>
                </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-brand-text-light dark:text-brand-text-dark uppercase tracking-wider">Ikuti Kami</h3>
            <div className="mt-4 flex space-x-6">
              <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
                <span className="sr-only">WhatsApp</span>
                <WhatsAppIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-base text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Alas Floris. All rights reserved.</p>
           <button onClick={() => setCurrentPage('admin')} className="mt-4 text-xs text-gray-400 hover:text-brand-green dark:hover:text-white transition-colors">
              Admin Login
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;