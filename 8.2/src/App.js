import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import {
  Add,
  Subtract,
  Multiply,
  Divide,
  Whoops404,
} from './components/pages.js';
import './style.css';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Calculator />}>
          <Route path="add" element={<Add />} />
          <Route path="sub" element={<Subtract />} />
          <Route path="mul" element={<Multiply />} />
          <Route path="div" element={<Divide />} />
        </Route>
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </>
  );
}
