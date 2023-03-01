import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MovieDetails = () => {
  const { id } = useParams();
  const movies = useSelector((state) => state.movies);
  const movie = movies.find((m) => m.id === id);
  return (
    <div>
      <h1>details</h1>
      <h2>{movie.title}</h2>
      <p>{movie.productionYear}</p>
      <p>rezyser: {movie.director}</p>
    </div>
  );
};
export default MovieDetails;
