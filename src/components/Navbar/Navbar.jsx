import React from 'react';
import './Navbar.css';


const Navbar = () => {
  const isLoggedIn = localStorage.getItem('token'); 

  const role = localStorage.getItem('role');

  
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('idUser');
    localStorage.removeItem('NameUser');
    localStorage.removeItem('role');
    

  };

  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        {isLoggedIn ? (
          role === 'admin' ? (
            <>
              <li>
                <a href="/profile">Profile</a>
              </li>
              <li>
                <a href="/doctors">Doctors</a>
              </li>
              <li>
                <a href="/users">Users</a>
              </li>
              <li>
                <a href="/logout" onClick={handleLogout}>Logout</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/profile">Profile</a>
              </li>
              <li>
                <a href="/booking">Requests</a>
              </li>
              <li>
                <a href="/doctor/appoitmentList">My Appointments</a>
              </li>
              <li>
                <a href="/notifications">My Notifications</a>
              </li>
              <li>
                <a href="/logout" onClick={handleLogout}>Logout</a>
              </li>
            </>
          )
        ) : (
          <>
            <li>
              <a href="/booking">Services</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a href="/login">Sign In</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};


export default Navbar;

