import React from 'react';
import { useParams } from 'react-router-dom';
import { users } from '../data/users';

const UserDetail = () => {
  const { id } = useParams();
  const user = users.find(u => u.id === parseInt(id));

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default UserDetail;
