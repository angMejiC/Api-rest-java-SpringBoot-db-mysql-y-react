// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import { getUsers } from '../api/api';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then(data => {
        // Asegúrate de que data sea un array antes de actualizar el estado
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error('Data received is not an array:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        // Manejo de errores aquí
      });
  }, []);

  return (
    <div>
      <h2>Listado de Usuarios</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.firstName} {user.lastName} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
