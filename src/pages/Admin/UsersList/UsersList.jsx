import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UsersList = () => {
 
  const [users, setUsers] = useState([]);
  const [usersCount, setUsersCount] = useState(0);
  
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/Listusers');
        if (response.status === 200) {
          const { users, NbUsers } = response.data;
          setUsers(users);
          setUsersCount(NbUsers);
        } else {
          console.error('Failed to fetch Users:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching Users:', error);
      }
    };
    fetchUsers();
  }, []);
  
  return (
    <div className="parent_apt">
      <div className="div1_apt">
        <div className="appointment-container">
          <h2>Users List</h2>
          <Link to="/admin/newUser">
            <button className="add-user-btn">Add User</button>
          </Link>
          <table className="appointment-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>User's Phone</th>
                <th>User's Email</th>
              </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.firstName} {user.lastName}</td>
                  <td>{user.address}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
