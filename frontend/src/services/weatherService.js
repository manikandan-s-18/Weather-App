import axios from 'axios';

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/weather/${city}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};