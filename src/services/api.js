import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-airline.vercel.app/',
});

export const searchItineraries = async (origin, destination) => {
  try {
    const response = await api.post('/itineraries/', { origin, destination });
    return response.data?.data;
  } catch (error) {
    console.error('Error fetching itineraries:', error);
    return [];
  }
};


export const getAirports = async () => {
  try {
    const response = await api.get(`/airports/`);
    return response.data?.data;
  } catch (error) {
    console.error('Error fetching airports:', error);
    return [];
  }
};

export default api;
