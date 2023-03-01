import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import UserDetails from './components/UserDetails';
import UserForm from './components/UserForm';
import './style.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user/add" element={<UserForm />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/user/:id/edit" element={<UserForm update={true} />} />
      </Routes>
    </div>
  );
}
