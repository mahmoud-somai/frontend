import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import{useNavigate} from "react-router-dom"


const LoginAdmin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate()
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://34.196.153.174:4000/api/user/login', {
          email,
          password,
        });
  
        if (response.status === 200) {
          const{ token ,idUser,NameUser }= response.data;
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500
          });
          localStorage.setItem('token', token);
          localStorage.setItem('idUser', idUser);
          localStorage.setItem('NameUser', NameUser);
          navigate("/admin")
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
    <div className="parent">
      <div className="div1"></div>
      <div className="div2">
        <form className="form" onSubmit={handleSubmit}>
          <input
            placeholder="Enter your email"
            className="input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="*********"
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn_log">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginAdmin