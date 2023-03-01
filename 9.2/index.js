const Redux = require('redux');
const lukeState = {
  firstName: 'Luke',
  lastName: 'Skywalker',
  job: 'moisture farmer',
  side: 'light',
  weapons: {
    blaster: 'DL-42',
  },
};

const obiwanState = {
  firstName: 'Obi-Wan',
  lastName: 'Kenobi',
  job: 'jedi',
  side: 'light',
  weapons: {
    blaster: null,
  },
};
const starwarsReducer = (state = lukeState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_JEDI':
      return action.payload;
    case 'SET_JOB':
      state.job = action.job;
      return state;
    case 'FINISH_TRAINING':
      state.job = 'Jedi Knight';
      state.weapons.lightsaber = 'blue';
      return state;
    case 'JOIN_DARK_SIDE':
      state.job = 'Sith';
      state.side = 'Dark';
      state.weapons.lightsaber = 'red';
    default:
      return state;
  }
};

const { createStore } = Redux;
const store = createStore(starwarsReducer);

store.subscribe(() => {
  console.log('Zmienił się stan: ', store.getState());
});

store.dispatch({ type: 'SET_CURRENT_JEDI', payload: obiwanState });
store.dispatch({ type: 'SET_JOB', job: 'moisture farmer' });
store.dispatch({ type: 'FINISH_TRAINING' });
store.dispatch({ type: 'JOIN_DARK_SIDE' });
