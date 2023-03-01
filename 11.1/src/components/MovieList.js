import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMovie } from '../actions/MovieActions.js';

const MovieList = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };
  return (
    <div>
      <h1>movies</h1>
      <ul>
        {movies.map((m) => (
          <li key={m.id}>
            {m.title} ({m.productionYear})
            <button
              className="btn btn-outline-dark"
              onClick={() => handleDelete(m.id)}
            >
              delete
            </button>
            <Link className="btn btn-outline-dark" to={`/movies/${m.id}`}>
              details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieList;
