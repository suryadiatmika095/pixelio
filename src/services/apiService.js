import axios from 'axios';

const UNSPLASH_ACCESS_KEY = 'YqS2e_h9Hmz0INwINksk3USmtADYxnZPwiqVanD7-2w'; // Ganti dengan access key Anda
const BASE_URL = 'https://api.unsplash.com';

export const searchImages = async (query, page = 1, perPage = 12) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
      params: {
        query,
        page,
        per_page: perPage
      },
      headers: {
        'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
      }
    });

    return {
      images: response.data.results,
      total: response.data.total,
      totalPages: Math.ceil(response.data.total / perPage)
    };
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

export const downloadImage = async (downloadUrl) => {
  try {
    const response = await axios({
      method: 'get',
      url: downloadUrl,
      responseType: 'blob'
    });

    const blob = new Blob([response.data], { type: 'image/jpeg' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Download error:', error);
  }
};