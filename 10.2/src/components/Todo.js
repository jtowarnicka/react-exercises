import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Link } from 'react-router-dom';

export default function Todo() {
  return (
    <div>
      <h1>TODO</h1>
      <nav className="navbar navbar-expand-lg bg-light">
        <Link to="/">HOME</Link>
      </nav>
      <TodoForm />
      <TodoList />
    </div>
  );
}
