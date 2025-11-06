import React from 'react';
import { MAPS_EMBED_URL, WHATSAPP_LINK, INSTAGRAM_LINK, FACEBOOK_LINK, MAPS_ADDRESS } from '../constants';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '../components/icons/SocialIcons';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Terima kasih atas pesan Anda! Kami akan segera merespons.');
    // Here you would typically handle form submission, e.g., send to an API
    (e.target as HTMLFormElement).reset();
  };
  
  return (
    <div className="py-20 bg-stone-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold font-serif text-brand-text-light dark:text-brand-text-dark">Hubungi Kami</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Kami siap membantu mewujudkan ide hijau Anda.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold font-serif text-brand-green dark:text-green-300 mb-6">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nama Lengkap</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Alamat Email</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Pesan Anda</label>
                <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-semibold py-3 px-4 rounded-md shadow-sm transition-colors duration-300">Kirim</button>
              </div>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-brand-text-light dark:text-brand-text-dark">Informasi Kontak</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{MAPS_ADDRESS}</p>
              <div className="mt-4 flex space-x-4">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 transition-colors"><WhatsAppIcon className="h-6 w-6"/></a>
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors"><InstagramIcon className="h-6 w-6"/></a>
                <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors"><FacebookIcon className="h-6 w-6"/></a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-text-light dark:text-brand-text-dark">Lokasi Kami</h3>
              <div className="mt-4 rounded-lg overflow-hidden shadow-lg border-2 border-brand-green/20">
                <iframe
                  src={MAPS_EMBED_URL}
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
