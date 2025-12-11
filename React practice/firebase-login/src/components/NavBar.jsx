// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import './NavBar.css'

const NavBar = () => {


  return (
    <div className="navbar">
      
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
     
    </div>
  );
};

export default NavBar;
