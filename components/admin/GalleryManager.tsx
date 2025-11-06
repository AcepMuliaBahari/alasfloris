import React, { useState } from 'react';
import { GalleryImage } from '../../types';
import { TrashIcon } from '../icons/MiscIcons';

interface GalleryManagerProps {
    gallery: GalleryImage[];
    onAddImage: (image: Omit<GalleryImage, 'id'>) => void;
    onDeleteImage: (imageId: number) => void;
}

const GalleryManager: React.FC<GalleryManagerProps> = ({ gallery, onAddImage, onDeleteImage }) => {
    const [newImage, setNewImage] = useState({ src: '', alt: '', type: 'after' as GalleryImage['type'] });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewImage(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newImage.src || !newImage.alt) {
            alert('Harap isi URL Gambar dan Teks Alternatif.');
            return;
        }
        onAddImage(newImage);
        setNewImage({ src: '', alt: '', type: 'after' });
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4 font-serif text-brand-green dark:text-green-300">Manajemen Galeri</h2>
            
            {/* Add Image Form */}
            <form onSubmit={handleSubmit} className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-end p-4 border rounded-lg dark:border-gray-700">
                <input name="src" value={newImage.src} onChange={handleInputChange} placeholder="URL Gambar" required className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md"/>
                <input name="alt" value={newImage.alt} onChange={handleInputChange} placeholder="Teks Alternatif (Deskripsi)" required className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md"/>
                <select name="type" value={newImage.type} onChange={handleInputChange} className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md">
                    <option value="after">Sesudah</option>
                    <option value="before">Sebelum</option>
                    <option value="process">Proses</option>
                </select>
                <button type="submit" className="w-full bg-brand-green text-white font-semibold py-2 px-4 rounded-md hover:bg-brand-green-dark transition-colors md:col-span-2 lg:col-span-1">Tambah Gambar</button>
            </form>

            {/* Image List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {gallery.map(image => (
                    <div key={image.id} className="relative group">
                        <img src={image.src} alt={image.alt} className="w-full h-32 object-cover rounded-md"/>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button onClick={() => onDeleteImage(image.id)} className="text-white p-2 bg-red-600 rounded-full hover:bg-red-700">
                                <TrashIcon className="w-5 h-5"/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryManager;