// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Home from './components/Home';
import HomeAfterLogin from './components/HomeAfterLogin';
import DonateBlood from './components/DonateBlood';
import HostBloodDrive from './components/HostBloodDrive';
import AboutUs from './components/AboutUs';
import SignIn from './components/SignIn';
import Registration from './components/Registration';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomeAfterLogin />} />
        <Route path="/donate-blood" element={<DonateBlood />} />
        <Route path="/host-blood-drive" element={<HostBloodDrive />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Registration />} />
        
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;