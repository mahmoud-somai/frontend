import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('token'); 
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('idUser');
    localStorage.removeItem('NameUser');

  };

  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        {isLoggedIn ? ( // If logged in, show additional links
          <>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/booking">Services</a>
            </li>
            <li>
              <a href="/appointments">My Appointments</a>
            </li>
            <li>
              <a href="/notifications">My Notifications</a>
            </li>
            <li>
              <a href="/logout" onClick={handleLogout}>Logout</a>
            </li>
          </>
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

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar
>>>>>>> 3ed31286e7f30065a09ddc603c3020bb7c1c495a
