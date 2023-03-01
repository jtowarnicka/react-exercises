import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <Link to="/">home</Link>
      <Link to="/movies">movies</Link>
      <Link to="/movies/add">add movie</Link>
      <Link to="/directors">directors</Link>
      <Link to="/directors/add">add director</Link>
    </nav>
  );
};
export default Navbar;
