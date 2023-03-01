import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteNote } from '../actions/NoteActions'
import '../style.css'

export default function NoteList({note, deleteNote}) {
  return (
    <div>
      <Link className="btn btn-outline-dark" to="/note"> GO BACK </Link>
      <ul>
        {note.map((n) => (
        <li key={n.id}>
          <p className="note">{n.content}</p>
          <button className="btn btn-outline-dark" onClick={() => deleteNote(n.id)}>
            Delete
          </button>
          <Link className="btn btn-outline-dark" to={`/note/${n.id}`}>
            Update
          </Link>
        </li>
      ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    note: state.note,
  };
};

const mapDispatchToProps = {
  deleteNote
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
