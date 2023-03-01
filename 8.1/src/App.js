import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Services,
  Events,
  Contact,
  ContactUS,
  ContactPL,
  ContactDE,
  Whoops404,
} from './pages';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />}>
            <Route path="us" element={<ContactUS />} />
            <Route path="pl" element={<ContactPL />} />
            <Route path="de" element={<ContactDE />} />
          </Route>
        </Route>
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}
