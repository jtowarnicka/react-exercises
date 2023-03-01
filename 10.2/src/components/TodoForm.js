import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {addTodo} from '../actions/TodoActions.js';
import {connect} from 'react-redux'

export default function TodoForm({addTodo}) {
  const handleSubmit = (e) => {
    e.preventDefault();
      addTodo(
        uuidv4(),
        e.target.elements.title.value,
        e.target.elements.date.value,
        false,
      )
    e.target.elements.title.value = '';
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="title">title</label>
      <input id="title" name="title" type="text" required />
      <label htmlFor="date">date</label>
      <input id="date" name="date" type="date" required />
      <button className="btn btn-outline-dark" type="submit">
        Submit
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};

const mapDispatchToProps = {
  addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
