import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { CloseIcon } from './icons/MiscIcons';
import { GroundingChunk } from '../types';

interface PlantCareInfoProps {
  plantName: string;
  onClose: () => void;
}

const PlantCareInfo: React.FC<PlantCareInfoProps> = ({ plantName, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [careInfo, setCareInfo] = useState<string | null>(null);
  const [sources, setSources] = useState<GroundingChunk[]>([]);

  useEffect(() => {
    const fetchCareInfo = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fix: Per guidelines, assume API_KEY is present and use it directly.
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const prompt = `Berikan tips perawatan singkat dan jelas untuk tanaman "${plantName}" dalam bahasa Indonesia. Fokus pada tiga poin utama: kebutuhan cahaya, frekuensi penyiraman, dan rekomendasi pemupukan. Gunakan format poin atau paragraf pendek.`;
        
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: prompt,
          config: {
            tools: [{googleSearch: {}}],
          },
        });
        
        setCareInfo(response.text);
        const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks as GroundingChunk[] | undefined;
        if (groundingChunks) {
          setSources(groundingChunks.filter(chunk => chunk.web && chunk.web.uri && chunk.web.title));
        }

      } catch (err) {
        console.error("Error fetching plant care info:", err);
        setError("Gagal memuat informasi perawatan. Silakan coba lagi nanti.");
      } finally {
        setLoading(false);
      }
    };

    fetchCareInfo();
  }, [plantName]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold font-serif text-brand-green dark:text-green-300">Info Perawatan: {plantName}</h2>
          <button onClick={onClose} className="p-2 text-gray-500 dark:text-gray-400 hover:text-brand-green dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          {loading && (
            <div className="flex items-center justify-center space-x-2">
               <div className="w-4 h-4 rounded-full bg-brand-green animate-pulse"></div>
               <div className="w-4 h-4 rounded-full bg-brand-green animate-pulse [animation-delay:0.2s]"></div>
               <div className="w-4 h-4 rounded-full bg-brand-green animate-pulse [animation-delay:0.4s]"></div>
               <span className="ml-2 text-gray-600 dark:text-gray-400">Mencari info...</span>
            </div>
          )}
          {error && <p className="text-red-500 text-center">{error}</p>}
          {careInfo && (
             <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
                <p>{careInfo}</p>
             </div>
          )}
        </div>

        {sources.length > 0 && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Sumber:</h3>
            <ul className="text-xs list-disc list-inside space-y-1">
              {sources.map((source, index) => (
                <li key={index}>
                  <a 
                    href={source.web.uri} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    title={source.web.uri}
                  >
                    {source.web.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantCareInfo;
