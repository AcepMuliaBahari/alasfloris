import React, { useState } from 'react';
import { GalleryImage } from '../types';

interface GalleryPageProps {
    galleryImages: GalleryImage[];
}

type FilterType = 'all' | 'before' | 'after' | 'process';

const GalleryPage: React.FC<GalleryPageProps> = ({ galleryImages }) => {
    const [filter, setFilter] = useState<FilterType>('all');
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    const filters: { key: FilterType; label: string }[] = [
        { key: 'all', label: 'Semua' },
        { key: 'before', label: 'Sebelum' },
        { key: 'after', label: 'Sesudah' },
        { key: 'process', label: 'Proses' }
    ];

    const filteredImages = galleryImages.filter(img => filter === 'all' || img.type === filter);

    return (
        <div className="py-20 min-h-[70vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold font-serif text-brand-text-light dark:text-brand-text-dark">Galeri Proyek Kami</h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Lihat bagaimana kami mengubah ruangan menjadi lebih hidup.</p>
                </div>

                <div className="flex justify-center flex-wrap gap-4 mb-10">
                    {filters.map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setFilter(key)}
                            className={`px-5 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                                filter === key
                                ? 'bg-brand-green text-white shadow-md'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredImages.map((image: GalleryImage) => (
                        <div key={image.id} className="group cursor-pointer overflow-hidden rounded-lg shadow-lg" onClick={() => setSelectedImg(image.src)}>
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 aspect-square"
                            />
                        </div>
                    ))}
                </div>

                 {filteredImages.length === 0 && (
                    <div className="col-span-full text-center py-16 text-gray-500 dark:text-gray-400">
                        <p>Tidak ada gambar untuk filter ini.</p>
                    </div>
                )}
            </div>

            {/* Modal for viewing image */}
            {selectedImg && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImg(null)}
                >
                    <img src={selectedImg} alt="Tampilan diperbesar" className="max-w-full max-h-full rounded-lg shadow-2xl"/>
                    <button className="absolute top-4 right-4 text-white text-3xl">&times;</button>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;