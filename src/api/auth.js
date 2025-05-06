import axios from 'axios';

const API = axios.create({
    baseURL: "https://nestjs-login-registration-profile-production.up.railway.app",
    // baseURL: "http://localhost:3000",
    withCredentials: true,
});

export const register = (data) => {
  console.log("Sending data to backend:", data);  // Log les données envoyées
  return API.post('/auth/register', data)
    .then(response => console.log("Response from backend:", response))
    .catch(error => console.error("Error sending request:", error));
};export const login = (data) => API.post('/auth/login', data);
