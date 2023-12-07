import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const UsersList = () => {
 
  const [users, setUsers] = useState([]);
  const [usersCount, setUsersCount] = useState(0);
  
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://34.196.153.174:4000/api/Listusers');
        if (response.status === 200) {
          const { users, NbUsers } = response.data;
          const filteredUsers = users.filter(user => user.role === 'user'); // Filter users by role
          setUsers(filteredUsers);
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

  
  const handleDeleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const response = await axios.delete(`http://34.196.153.174:4000/api/user/${userId}`);
        
        if (response.status === 200) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'User deleted with success',
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1500);
         
        }
      } catch (error) {
        console.error(`Error deleting user with ID ${userId}:`, error);
      }
    }
  };


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
              <th>Username</th>
              <th>User Phone</th>
              <th>User Email</th>
              <th>Actions</th> {/* New column for Update and Delete buttons */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id.slice(-10)}</td>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.email}</td>
                <td>
                  {/* Update button */}
                  <Link to={`/admin/updateuser/${user._id}`}>
                    <button className="update-btn">Update</button>
                  </Link>
                  {/* Delete button (you can add confirmation modals or functionality here) */}
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
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
