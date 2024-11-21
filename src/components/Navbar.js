import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link> | <Link to="/users">User List</Link> | <Link to="/users/add">Add User</Link>
  </nav>
);

export default Navbar;
