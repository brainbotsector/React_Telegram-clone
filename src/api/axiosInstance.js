import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://devapi.beyondchats.com/api',
});

export default axiosInstance;
