import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true, 
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`, // if needed globally
  },
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const res = await axios.get('http://localhost:5000/api/auth/refresh-token', {
          withCredentials: true
        });
        localStorage.setItem('token', res.data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
        return axios(originalRequest);
      } catch (err) {
        console.log("Refresh token failed", err);
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

export default API;
