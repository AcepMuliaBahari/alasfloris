import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { WhatsAppIcon } from './icons/SocialIcons';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
};

export default FloatingWhatsApp;
