import axios from 'axios';


const API_BASE_URL = 'https://takeu.onrender.com/api'; 


export const fetchBannerData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/banner`);
    return response.data;
  } catch (error) {
    console.error('Error fetching banner data:', error);
    throw error;
  }
};


export const updateBannerData = async (bannerData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/banner/update`, bannerData);
    return response.data;
  } catch (error) {
    console.error('Error updating banner data:', error);
    throw error;
  }
};


export const toggleBannerVisibility = async (isVisible) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/banner/visibility`, { isVisible });
    return response.data;
  } catch (error) {
    console.error('Error toggling banner visibility:', error);
    throw error;
  }
};


export const setBannerTimer = async (timer) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/banner/timer`, { timer });
    return response.data;
  } catch (error) {
    console.error('Error setting banner timer:', error);
    throw error;
  }
};
