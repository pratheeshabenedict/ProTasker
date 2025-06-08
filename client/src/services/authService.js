import API from '../api/api';

export const signup = async (userData) => {
  const response = await API.post('/auth/Signup', userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await API.post('/auth/login', credentials);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
  // Optionally clear other auth state or call backend logout if implemented
};
