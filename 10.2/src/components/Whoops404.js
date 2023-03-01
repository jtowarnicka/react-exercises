import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Whoops404() {
  let location = useLocation();
  return (
    <div>
      <h1>Nie znaleziono elementu: {location.pathname}</h1>
    </div>
  );
}
