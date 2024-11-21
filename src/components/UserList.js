import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users, deleteUser }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>
              <span>{user.name} - {user.email}</span>
              <div>
                <Link to={`/users/${user.id}/edit`}>Edit</Link>
                <button onClick={() => deleteUser(user.id)} style={{ marginLeft: '10px' }}>
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No users found. Add a user to get started!</p>
        )}
      </ul>
    </div>
  );
};

export default UserList;
