import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

export default function Note() {
  return (
    <div>
      <h1>Note</h1>
      <nav className="navbar navbar-expand-lg bg-light">
        <Link to="/"> HOME </Link>
        <Link to="/note/form"> FORM </Link>
        <Link to="/note/list"> LIST </Link>
      </nav>
      {/* <NoteForm /> */}
      {/* <NoteList /> */}
    </div>
  );
}
