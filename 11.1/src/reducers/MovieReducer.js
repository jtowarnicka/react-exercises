import { v4 as uuidv4 } from 'uuid';
const initialState = [
  {
    id: uuidv4(),
    title: 'Father',
    productionYear: '2020',
    director: '',
  },
  {
    id: uuidv4(),
    title: 'WALL·E',
    productionYear: '2008',
    director: '',
  },
  {
    id: uuidv4(),
    title: 'Malena',
    productionYear: '2000',
    director: '',
  },
  {
    id: uuidv4(),
    title: 'Pieskie Popołudnie',
    productionYear: '1975',
    director: '',
  },
];

export const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [...state, action.payload];
    case 'DELETE_MOVIE':
      return state.filter((movie) => movie.id != action.payload);
    default:
      return state;
  }
};
