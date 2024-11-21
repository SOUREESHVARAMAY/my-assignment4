import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import './App.css';

function App() {
  const [users, setUsers] = useState([]); 
  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };
  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<h1>Welcome to User Management</h1>} />
          <Route
            path="/users"
            element={<UserList users={users} deleteUser={deleteUser} />}
          />
          <Route path="/users/add" element={<AddUser addUser={addUser} />} />
          <Route
            path="/users/:id/edit"
            element={<EditUser users={users} updateUser={updateUser} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
