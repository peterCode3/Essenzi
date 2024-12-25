import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend
    axios.get('http://localhost:5000/api/users')
      .then(response => {
        setUsers(response.data); // Set data in state
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []); // Empty array means the effect runs only once after the component mounts

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name} - {user.age}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
