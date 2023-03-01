import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <Link to="/">users</Link>
      <Link to="/user/add">add user</Link>
    </nav>
  );
};
export default Navbar;
