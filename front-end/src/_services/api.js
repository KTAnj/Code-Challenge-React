import axios from 'axios'
console.log(process.env.REACT_APP_BASE_URL);
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 2000,
  });

export default axiosInstance