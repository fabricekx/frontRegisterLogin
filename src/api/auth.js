import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000', // ou l’URL de ton backend NestJS
});

export const register = (data) => API.post('/auth/register', data);
export const login = (data) => API.post('/auth/login', data);
