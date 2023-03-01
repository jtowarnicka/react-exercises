import Redux from 'redux';
import { combineReducers } from 'redux';
import currentUserReducer from './currentUserReducer.js';
import usersReduce from './usersReduce.js';
const user1 = {
  username: 'mmiotk',
  firstName: 'Mateusz',
  lastName: 'Miotk',
  favoriteColor: 'red',
};
const user2 = {
  username: 'timmyt',
  firstName: 'Timothée',
  lastName: 'Chalamet',
  favouriteColor: 'green',
};

const user3 = {
  username: 'ladybird',
  firstName: 'Saoirse',
  lastName: 'Ronan',
  favouriteColor: 'blue',
};

const rootReducer = combineReducers({
  users: usersReduce,
  currentUser: currentUserReducer,
});

const { createStore } = Redux;
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log('Zmienił się stan: ', store.getState());
});

store.dispatch({ type: 'ADD_USER', user: user1 });
store.dispatch({ type: 'ADD_USER', user: user2 });
store.dispatch({ type: 'ADD_USER', user: user3 });
store.dispatch({ type: 'REMOVE_USER', username: 'ladybird' });
store.dispatch({
  type: 'UPDATE_USER',
  username: 'timmyt',
  updatedUser: {
    username: 'Lil Timmy Tim',
    favouriteColor: 'blue',
  },
});
store.dispatch({
  type: 'CURRENT_USER',
  user: store.getState().users[store.getState().users.length - 1],
});
