// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Chat from './pages/Chat';

import PrivateRoute from './components/PrivateRoute';
import './App.css';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
    <NavBar/>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/chat" element={<Chat/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
