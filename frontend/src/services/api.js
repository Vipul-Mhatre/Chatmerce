import axios from 'axios';


const BASE_URL = 'http://127.0.0.1:5000';

// Function to log in a user
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.message);
    throw error;
  }
};

// Function to send a query to the chatbot and receive a response
export const getChatbotResponse = async (query) => {
  try {
    const response = await axios.post(`${BASE_URL}/chatbot`, { query });
    return response.data;
  } catch (error) {
    console.error('Error getting chatbot response:', error.message);
    throw error;
  }
};