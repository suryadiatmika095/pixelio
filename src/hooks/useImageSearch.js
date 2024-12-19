import { useState, useEffect } from 'react';
import { searchImages } from '../services/apiService';

export const useImageSearch = (initialQuery = '') => {
  const [query, setQuery] = useState(initialQuery);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      fetchImages();
    }
  }, [query, page]);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const result = await searchImages(query, page);
      setImages(prevImages => 
        page === 1 ? result.images : [...prevImages, ...result.images]
      );
      setTotalPages(result.totalPages);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const searchNewQuery = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const loadMoreImages = () => {
    if (page < totalPages) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return {
    images,
    loading,
    error,
    page,
    totalPages,
    searchNewQuery,
    loadMoreImages
  };
};