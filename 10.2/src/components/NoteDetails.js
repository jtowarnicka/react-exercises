import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {updateNote} from '../actions/NoteActions';
import { connect } from 'react-redux';

export default function NoteDetails({note, updateNote}) {
  const { id } = useParams();
  const n = note.find((n) => n.id === id);
  const handleSubmit = (e) => {
    e.preventDefault();
    updateNote(id, e.target.elements.content.value)
  };
  return (
    <>
      <Link className="btn btn-outline-dark" to={`/note/list`}>Go back</Link>
      <div className="note-data">
        <p>{n.id}</p>
        <p>{n.content}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>content</label>
        <textarea id="content" name="content" type="text" required />
        <button id="btn btn-outline-dark" type="submit">
          update
        </button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    note: state.note,
  };
};

const mapDispatchToProps = {
  updateNote
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetails);
