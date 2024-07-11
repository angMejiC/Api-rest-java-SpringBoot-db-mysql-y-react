// api/api.js

import axios from 'axios';

const API_USERS = 'http://localhost:8080/user'; // Ajusta la URL según tu configuración

export const getUsers = () => {
  return axios.get(API_USERS)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching users:', error);
      throw error;
    });
};

export const createUser = (newUser) => {
  return axios.post(API_USERS, newUser)
    .then(response => response.data)
    .catch(error => {
      console.error('Error creating user:', error);
      throw error;
    });
};
