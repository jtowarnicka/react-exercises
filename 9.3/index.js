const Redux = require('redux');

const users = [
  {
    username: 'mmiotk',
    firstName: 'Mateusz',
    lastName: 'Miotk',
    favoriteColor: 'red',
  },
  {
    username: 'timmyt',
    firstName: 'Timothée',
    lastName: 'Chalamet',
    favouriteColor: 'green',
  },
];

const user = {
  username: 'ladybird',
  firstName: 'Saoirse',
  lastName: 'Ronan',
  favouriteColor: 'blue',
};

const usersReducer = (state = users, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.user];
    case 'REMOVE_USER':
      return state.filter((user) => user.username != action.username);
    case 'UPDATE_USER':
      return state.reduce((acc, el) => {
        return [
          ...acc,
          el.username === action.username
            ? {
                ...el,
                ...action.updatedUser,
              }
            : el,
        ];
      }, []);
    default:
      return state;
  }
};

const { createStore } = Redux;
const store = createStore(usersReducer);

store.subscribe(() => {
  console.log('Zmienił się stan: ', store.getState());
});

store.dispatch({ type: 'ADD_USER', user: user });
store.dispatch({ type: 'REMOVE_USER', username: 'ladybird' });
store.dispatch({
  type: 'UPDATE_USER',
  username: 'timmyt',
  updatedUser: {
    username: 'Lil Timmy Tim',
    favouriteColor: 'blue',
  },
});
