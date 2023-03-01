import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {editTodo} from '../actions/TodoActions.js';
import { connect } from 'react-redux';

export default function TodoEdit({todo, editTodo}) {
  const { id } = useParams();
  const t = todo.find((t) => t.id === id);
  const handleSubmit = (e) => {
    e.preventDefault();
      editTodo(id, e.target.elements.title.value, e.target.elements.date.value)
  };
  return (
    <>
      <Link className="btn btn-outline-dark" to={`/todo`}>Go back</Link>
      <div className="todo-data">
        <p>{t.id}</p>
        <p>{t.title}</p>
        <p>{t.date}</p>
        <p>{t.done ? 'done' : 'not done'}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>title</label>
        <input
          id="title"
          name="title"
          type="text"
          defaultValue={t.title}
          required
        />
        <label>date</label>
        <input
          id="date"
          name="date"
          type="date"
          defaultValue={t.date}
          required
        />
        <button className="btn btn-outline-dark" type="submit">
          update
        </button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};

const mapDispatchToProps = {
  editTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoEdit);
