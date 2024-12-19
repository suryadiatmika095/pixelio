import React from 'react';
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';
import { useImageSearch } from './hooks/useImageSearch';

function App() {
  const {
    images,
    loading,
    error,
    page,
    totalPages,
    searchNewQuery,
    loadMoreImages
  } = useImageSearch();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container mx-auto px-4 flex-grow flex flex-col items-center justify-center">
        <header className="text-center py-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Pixelio
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Temukan ribuan gambar berkualitas disini.
          </p>
        </header>

        {/* SearchBar with custom size */}
        <div className="w-full max-w-md mb-6">
          <SearchBar onSearch={searchNewQuery} />
        </div>

        <div className="w-full mb-12">
          <ImageGrid 
            images={images}
            loading={loading}
            error={error}
            loadMoreImages={loadMoreImages}
            totalPages={totalPages}
            currentPage={page}
          />
        </div>
      </div>

      {/* Horizontal Rule */}
      <hr className="border-gray-300 mb-1" />

      {/* Footer */}
      <footer className="py-6 text-center mt-auto w-full text-gray-400">
        <p>&copy; 2024 Pixelio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
