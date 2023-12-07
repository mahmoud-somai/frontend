import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams,Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateUser = () => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        email: "",
        password: "",
      });
      const navigate = useNavigate();
      const { id } = useParams(); // Get the user ID from the URL params
    
      useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await axios.get(`http://34.196.153.174:4000/api/user/${id}`);
            if (response.status === 200) {
              setUserData(response.data);
            } else {
              console.error('Failed to fetch user:', response.statusText);
            }
          } catch (error) {
            console.error('Error fetching user:', error);
          }
        };
    
        fetchUserData();
      }, [id]);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.patch(`http://34.196.153.174:4000/api/user/${id}`, userData);
          if (response.status === 200) {
            console.log('User updated with success:', response.data);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'User updated with success',
              showConfirmButton: false,
              timer: 1500,
            });
            navigate('/admin/usersList');
          } else {
            console.error('Failed to update user:', response.statusText);
          }
        } catch (error) {
          console.error('Error updating user:', error);
        }
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
      };
    
      return (
        <div className="users-container">
          <h2>Update User</h2>
          <form onSubmit={handleSubmit}>
            {/* Render your input fields with current user data */}
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
                type="text"
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
            <div className="form-group" hidden>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Update User</button>&nbsp;&nbsp;<Link to="/admin/usersList"> <button>Cancel</button> </Link> 
          </form>
        </div>
      );
    };

export default UpdateUser