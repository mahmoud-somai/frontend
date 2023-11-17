import React from 'react';
import { Link } from 'react-router-dom';

const UsersList = () => {
  const users = [
    {
      id: '1',
      userName: 'Alice Johnson',
      userPhone: '123-456-7890',
      email: 'user1@gmail.com',
    },
    {
      id: '2',
      userName: 'Bob Smith',
      userPhone: '987-654-3210',
      email: 'user2@gmail.com',
    },
    // Add more user information...
  ];

  return (
    <div className="parent_apt">
      <div className="div1_apt">
        <div className="appointment-container">
          <h2>Users List</h2>
          <Link to="/admin/user">
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
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.userName}</td>
                  <td>{user.userPhone}</td>
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
