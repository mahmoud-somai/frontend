import React, { useState } from 'react';
import axios from 'axios';
import{useNavigate} from "react-router-dom"
import Swal from 'sweetalert2';

import './Users.css';
const Users = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    email: '',
    password: '',
  });
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://34.196.153.174:4000/api/user/register', userData);
      if (response.status === 200) {
        console.log('Doctor added with success:', response.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Doctor added with success",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/admin")
      } else {
        console.error('Failed to add doctor:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
   
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="users-container">
      <h2>Add a User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit">Add User</button>&nbsp;&nbsp;
        
      </form>
    </div>
  );
};

export default Users;
