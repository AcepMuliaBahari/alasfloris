import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
      <div className="flex justify-center mb-4">
          <div className="bg-green-100 dark:bg-brand-green-dark p-4 rounded-full">
            <Icon className="h-10 w-10 text-brand-green dark:text-green-200" />
          </div>
      </div>
      <h3 className="text-2xl font-bold font-serif text-brand-green dark:text-green-300 mb-3">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-400">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;
