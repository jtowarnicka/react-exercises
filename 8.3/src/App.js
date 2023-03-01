import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Look from './components/Look.js';
import Home from './components/Home.js';
import Details from './components/Details.js';
import Whoops404 from './components/Whoops404.js';
import pictures from './data/pictures.js';
import './style.css';

export default function App() {
  const random = Math.floor(Math.random() * pictures.length);
  return (
    <>
      <div className="navlink">
        <NavLink className="link" to={'/'}>
          Home
        </NavLink>
        <NavLink className="link" to={`/${random}`}>
          Spring 2023 Collection
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Look />}>
          <Route path="details" element={<Details />} />
        </Route>
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </>
  );
}
