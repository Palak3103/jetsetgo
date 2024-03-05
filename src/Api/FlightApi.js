import axios from 'axios';

const BASE_URL = 'https://api.npoint.io/378e02e8e732bb1ac55b';

export const fetchFlights = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching flight data:', error);
    throw error;
  }
};
