import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-center max-w-2xl mx-auto mb-6 shadow-md rounded-full overflow-hidden"
    >
      <input 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Cari gambar..."
        className="w-full px-4 py-3 text-gray-700 focus:outline-none"
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white p-3 hover:bg-blue-600 transition-colors"
      >
        <MagnifyingGlassIcon className="h-6 w-6" />
      </button>
    </form>
  );
};

export default SearchBar;