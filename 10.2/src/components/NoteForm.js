import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import {addNote} from '../actions/NoteActions';
import {connect} from 'react-redux'

export default function NoteForm({addNote}) {
  const [message, setMessage] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
      addNote(
        uuidv4(),
        e.target.elements.content.value,
      );
    e.target.elements.content.value = '';
    setMessage("dodano")
  };

  return (
    <>
    <Link className="btn btn-outline-dark" to="/note"> GO BACK </Link>
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="content">Note</label>
      <textarea id="content" name="content" type="text" required />
      <button className="btn btn-outline-dark" type="submit">
        Submit
      </button>
      <p>{message}</p>
    </form>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    note: state.note,
  };
};

const mapDispatchToProps = {
  addNote
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
