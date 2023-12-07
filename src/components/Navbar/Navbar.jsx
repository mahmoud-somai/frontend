import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const handleLogout = () => {

    localStorage.clear();
  };

  const renderUserLinks = () => (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/user/profile">Profile</a>
      </li>
      <li>
        <a href="/booking">Services</a>
      </li>
      <li>
        <a href="/user/appoitment">My Appointments</a>
      </li>
      <li>
        <a href="/user/notifications">My Notifications</a>
      </li>
      <li>
        <a href="/" onClick={handleLogout}>Logout</a>
      </li>
    </>
  );

  const renderAdminLinks = () => (
    <>
      <li>
        <a href="/admin">Home</a>
      </li>
      <li>
        <a href="/admin/usersList">Users</a>
      </li>
      <li>
        <a href="/admin/doctorsList">Doctors</a>
      </li>
      <li>
        <a href="/" onClick={handleLogout}>Logout</a>
      </li>
    </>
  );

  const renderDoctorLinks = () => (
    <>
      <li>
        <a href="/doctor/profile">Profile</a>
      </li>
      <li>
        <a href="/doctor/appoitmentList">My Appointments</a>
      </li>
      <li>
        <a href="/doctor/notifsList">My Notifications</a>
      </li>
      <li>
        <a href="/doctor/Requests">Requests</a>
      </li>
      <li>
        <a href="/doctor/settings">Settings</a>
      </li>
      <li>
        <a href="/" onClick={handleLogout}>Logout</a>
      </li>
    </>
  );

  return (
    <nav>
      <ul>
        {isLoggedIn ? (
          role === 'admin' ? renderAdminLinks() :
          role === 'doctor' ? renderDoctorLinks() :
          renderUserLinks()
        ) : (
          <>
            <li>
              <a href="/">Home</a>
            </li>
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
