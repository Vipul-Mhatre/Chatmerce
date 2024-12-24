import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // Adjust the backend URL if necessary
});

export default instance;