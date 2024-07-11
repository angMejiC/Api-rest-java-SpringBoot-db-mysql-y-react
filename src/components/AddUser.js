// src/components/AddUser.js

import React, { useState } from 'react';
import { createUser } from '../api/api'; // Asegúrate de que estás importando correctamente

const AddUser = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(user)
      .then(response => {
        console.log('Usuario creado:', response);
        // Lógica adicional, como actualizar la lista de usuarios si es necesario
      })
      .catch(error => {
        console.error('Error al crear usuario:', error);
      });
  };

  return (
    <div>
      <h2>Agregar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="firstName" value={user.firstName} onChange={handleChange} required />
        <br />
        <label>Last Name:</label>
        <input type="text" name="lastName" value={user.lastName} onChange={handleChange} required />
        <br />
        <label>Email:</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} required />
        <br />
        <button type="submit">Agregar Usuario</button>
      </form>
    </div>
  );
};

export default AddUser;
