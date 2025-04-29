import axios from 'axios';

const API = axios.create({
    baseURL: "mysql://root:nMoJaHAKriixjJUcJbygErvxXFxLQJdS@yamabiko.proxy.rlwy.net:29349/railway", // ou l’URL de ton backend NestJS
});

export const register = (data) => API.post('/auth/register', data);
export const login = (data) => API.post('/auth/login', data);
