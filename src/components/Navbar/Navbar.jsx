import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
    <ul>
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
    </ul>
  </nav>
  )
}

export default Navbar