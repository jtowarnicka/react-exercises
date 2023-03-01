import { v4 as uuidv4 } from 'uuid';
const initialState = [
  {
    id: uuidv4(),
    firstName: 'Giuseppe',
    lastName: 'Tornatore',
    age: 66,
  },
  {
    id: uuidv4(),
    firstName: 'Andrew',
    lastName: 'Stanton',
    age: 57,
  },
  {
    id: uuidv4(),
    firstName: 'Sidney',
    lastName: 'Lumet',
    age: null,
  },
  {
    id: uuidv4(),
    firstName: 'Florian',
    lastName: 'Zeller',
    age: 43,
  },
];

export const DirectorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DIRECTOR':
      return [...state, action.payload];
    case 'EDIT_DIRECTOR':
      return state.reduce((acc, el) => {
        return [
          ...acc,
          el.id === action.payload.id
            ? {
                ...el,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                age: action.payload.age,
              }
            : el,
        ];
      }, []);
    default:
      return state;
  }
};
