import { configureStore } from '@reduxjs/toolkit';
// RTK's configureStore API already adds the thunk middleware by default
import { MovieReducer } from './reducers/MovieReducer';
import { DirectorReducer } from './reducers/DirectorReducer';

const store = configureStore({
  reducer: {
    movies: MovieReducer,
    directors: DirectorReducer,
  },
});
export default store;
