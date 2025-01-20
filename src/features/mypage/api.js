import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dogakdogak.store',
});

export default api;
