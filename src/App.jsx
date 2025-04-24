import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';

import Register from './pages/registration';
import Login from './pages/loginUser';
import Profile from './pages/profileUser';

function App() {

  return (
  
    <div>
    <nav>
      <Link to="/register">Register</Link> |{' '}
      <Link to="/login">Login</Link> |{' '}
      <Link to="/profile">Profile</Link>
    </nav>

    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </div>
      
  
  )
}

export default App
