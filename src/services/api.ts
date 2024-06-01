import axios from 'axios';

const API_BASE_URL = 'https://newsapi.org/v2';
const API_KEY = process.env.API_KEY;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const getNewsList = async () => {
  try {
    const response = await axiosInstance.get(
      `/top-headlines?country=us&apiKey=${API_KEY}`,
    );

    return response?.data?.articles;
  } catch (error) {
    console.log('Failed to fetch news list', error);
  }
};
