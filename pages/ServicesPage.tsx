import React from 'react';
import { Service, GalleryImage } from '../types';
import ServiceCard from '../components/ServiceCard';

interface ServicesPageProps {
  services: Service[];
  galleryImages: GalleryImage[];
}

const ServicesPage: React.FC<ServicesPageProps> = ({ services, galleryImages }) => {
    
    return (
        <div className="py-20 bg-stone-50 dark:bg-gray-900 min-h-[70vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold font-serif text-brand-text-light dark:text-brand-text-dark">Layanan Profesional Kami</h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Solusi lengkap untuk segala kebutuhan tanaman Anda.</p>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map(service => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

                <div className="mt-20">
                    <h2 className="text-3xl font-extrabold font-serif text-center text-brand-text-light dark:text-brand-text-dark">Galeri Dekorasi</h2>
                     <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {galleryImages.slice(0, 4).map((image) => (
                            <div key={image.id} className="group overflow-hidden rounded-lg shadow-lg">
                                <img 
                                    src={image.src} 
                                    alt={image.alt} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 aspect-square"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;