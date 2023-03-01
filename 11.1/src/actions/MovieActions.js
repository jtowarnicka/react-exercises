import { v4 as uuidv4 } from 'uuid';
export const addMovie = (movie) => ({
  type: 'ADD_MOVIE',
  payload: { ...movie, id: uuidv4() },
});

export const deleteMovie = (id) => ({
  type: 'DELETE_MOVIE',
  payload: id,
});
