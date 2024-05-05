import axios from 'axios';

const api = axios.create({
  baseURL: 'https://server-indol-sigma-92.vercel.app/'
});

export default api;
