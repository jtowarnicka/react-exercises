import React from 'react';
import { useFetch } from './hooks/useFetch.js';
import './style.css';

export default function App() {
  const { data, loading, error } = useFetch(
    'https://fakestoreapi.com/products'
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <ul>
      {data?.map((e) => (
        <li key={e.id}>
          <p>{e.title}</p>
          <p>{e.description}</p>
          <img src={e.image} alt="image"></img>
        </li>
      ))}
    </ul>
  );
}
