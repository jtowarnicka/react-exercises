import React from 'react';
import { connect } from 'react-redux';
import {finishTodo, deleteTodo} from '../actions/TodoActions.js';
import { Link } from 'react-router-dom';

export default function TodoList({todo, deleteTodo, finishTodo}) {
  return (
    <div >
      <ul>{todo.map((t) => (
        <li key={t.id}>
          {t.done ? (
          <div className="done form-check">
            <p className="done form-check-label">{t.title} - {t.date}</p>
              <input
                className="form-check-input"
                id="flexCheckDefault"
                type="checkbox"
                checked={todo.done}
                onChange={() => finishTodo(t.id)}
              />
            <div>
              <button className="btn btn-outline-dark" onClick={() => deleteTodo(t.id)}>Delete</button>
              <Link className="btn btn-outline-dark" to={`/todo/${t.id}`}>Update</Link>
              </div>
            </div>
          ) : (
            <div className="form-check">
              <p className="form-check-label">{t.title} - {t.date}</p>
              <input
              className="form-check-input"
              id="flexCheckDefault"
                type="checkbox"
                checked={todo.done}
                onChange={() => finishTodo(t.id)}
              />
              <div>
              <button className="btn btn-outline-dark" onClick={() => deleteTodo(t.id)}>Delete</button>
              <Link className="btn btn-outline-dark" to={`/todo/${t.id}`}>Update</Link>
              </div>
            </div>
          )}
        </li>
      ))}</ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};

const mapDispatchToProps = {
  finishTodo, deleteTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
