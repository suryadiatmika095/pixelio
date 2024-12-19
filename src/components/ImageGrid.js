import React from 'react';
import ImageCard from './ImageCard';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';

const ImageGrid = ({ 
  images, 
  loading, 
  error, 
  loadMoreImages, 
  totalPages, 
  currentPage 
}) => {
  if (error) {
    return (
      <div className="text-center text-red-500 flex items-center justify-center">
        <ExclamationTriangleIcon className="h-10 w-10 mr-2" />
        Terjadi kesalahan dalam memuat gambar
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-6 px-4">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>

      {loading && (
        <div className="text-center my-4">
          Memuat gambar...
        </div>
      )}

      {currentPage < totalPages && (
        <div className="text-center my-6">
          <button 
            onClick={loadMoreImages}
            disabled={loading}
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            Muat Lebih Banyak
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
