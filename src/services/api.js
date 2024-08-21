import axios from 'axios';
import { API_BASE_URL, TIMEOUT } from '../config/constants';

// Create an Axios instance for API calls
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    // Retrieve token from localStorage or context (e.g., AuthContext)
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh
api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
  
        // Attempt to refresh the token
        try {
          const response = await api.post('/auth/refresh-token', {
            refreshToken: localStorage.getItem('refreshToken'),
          });
  
          const { accessToken } = response.data;
          localStorage.setItem('authToken', accessToken);  // Update the access token
  
          api.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
  
          return api(originalRequest);  // Retry the original request
        } catch (refreshError) {
          // Handle token refresh error (e.g., log out the user)
          console.error('Refresh token failed:', refreshError);
          localStorage.removeItem('authToken');
          localStorage.removeItem('refreshToken');
          // Redirect to login or show a login prompt
          // window.location.href = '/login';
        }
      }
  
      return Promise.reject(error);
    }
);
  


// Example: Fetch all menu items
export const fetchMenuItems = async () => {
  try {
    const response = await api.get('/menu-items');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Example: Create an order
export const createOrder = async (orderData) => {
  try {
    const response = await api.post('/order', orderData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
