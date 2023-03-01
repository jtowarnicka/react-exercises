import React from 'react';
import './style.css';
import Todo from './components/Todo';
import TodoEdit from './components/TodoEdit';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import NoteDetails from './components/NoteDetails';
import Home from './components/Home';
import Whoops404 from './components/Whoops404';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="todo" element={<Todo />} />
        <Route path="todo/:id" element={<TodoEdit />} />
        <Route path="note" element={<Note />} />
        <Route path="note/form" element={<NoteForm />} />
        <Route path="note/list" element={<NoteList />} />
        <Route path="note/:id" element={<NoteDetails />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}
