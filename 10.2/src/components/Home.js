import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav className="navbar navbar-expand-lg bg-light">
        <Link to="todo">TODO</Link>
        <Link to="note">NOTE</Link>
      </nav>
    </div>
  );
};
export default Home;
