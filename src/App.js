// src/App.js
import React from 'react';
import './App.css';
import UserList from './components/UserList';
import AddUser from './components/AddUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Book Store</h1>
        <AddUser />
        <UserList />
      </header>
    </div>
  );
}

export default App;
