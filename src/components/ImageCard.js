import React from 'react';
import { downloadImage } from '../services/apiService';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

const ImageCard = ({ image }) => {
  const handleDownload = () => {
    downloadImage(image.urls.regular);
  };

  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <img 
        src={image.urls.small} 
        alt={image.alt_description || 'Gambar'}
        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end p-4">
        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium truncate">
                {image.user.name}
              </p>
              <p className="text-xs text-gray-300 truncate">
                {image.description || 'Tidak ada deskripsi'}
              </p>
            </div>
            <button 
              onClick={handleDownload}
              className="bg-white text-blue-500 p-2 rounded-full hover:bg-blue-50 transition-colors"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;