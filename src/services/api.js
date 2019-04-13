import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-matheus-backend.herokuapp.com',
});

export default api;