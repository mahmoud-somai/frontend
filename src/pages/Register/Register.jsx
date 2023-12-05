import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import Swal from 'sweetalert2';
import{useNavigate} from "react-router-dom"

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8800/api/user/register', {
        firstName,
        lastName,
        email,
        address,
        phoneNumber,
        age,
        password,
      });

      if (response.status === 200) {
        const message = response.data;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: message,
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/login")
      }
    } catch (error) {
      if (error.response) {
        // Request was made but server responded with an error status
        console.error('Error:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Error:', error.message);
      }
    }
  };

  return (
    <div className="parent_reg">
      <div className="div1_reg"></div>
      <div className="div2_reg">
        <form className="form_reg" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input_reg"
            placeholder="Enter your Firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            className="input_reg"
            placeholder="Enter your Lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            className="input_reg"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="input_reg"
            placeholder="Enter your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            className="input_reg"
            placeholder="Enter your Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="number"
            className="input_reg"
            placeholder="Enter your Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="password"
            className="input_reg"
            placeholder="*********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn_reg">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
