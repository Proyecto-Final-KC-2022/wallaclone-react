import axios from 'axios';

const client = axios.create({
  // Meter en .env
  baseURL: import.meta.env.VITE_REACT_APP_API_BASE_URL
});

const setAuthorizationHeader = token => {
  client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const removeAuthorizationHeader = () => {
  delete client.defaults.headers.common['Authorization'];
};

client.interceptors.response.use(
  response => response.data,
  error => {
    if (!error.response) {
      return Promise.reject({ message: error.message });
    }
    return Promise.reject({
      message: error.response.statusText,
      statusCode: error.response.status,
      ...error.response.data,
    });
  },
);

export const configureClient = ({ token }) => {
  if (token) {
    setAuthorizationHeader(token);
  }
};

export const resetClient = () => {
  removeAuthorizationHeader();
};

export default client;
