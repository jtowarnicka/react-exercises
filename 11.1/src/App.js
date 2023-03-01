import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import MovieForm from './components/MovieForm';
import DirectorList from './components/DirectorList';
import DirectorForm from './components/DirectorForm';
import DirectorDetails from './components/DirectorDetails';
import EditDirector from './components/EditDirector';
import './style.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/add" element={<MovieForm />} />
        <Route path="/directors" element={<DirectorList />} />
        <Route path="/directors/add" element={<DirectorForm />} />
        <Route path="/directors/:id" element={<DirectorDetails />} />
        <Route path="/directors/:id/edit" element={<EditDirector />} />
      </Routes>
    </div>
  );
}
