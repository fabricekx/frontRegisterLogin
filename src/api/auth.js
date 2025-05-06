import axios from 'axios';

const API = axios.create({
    baseURL: "https://nestjs-login-registration-profile-production.up.railway.app",
    // baseURL: "http://localhost:3000",
    withCredentials: true,
});

export const register = (data) => {API.post('/auth/register', data) };
export const login = (data) => API.post('/auth/login', data);
