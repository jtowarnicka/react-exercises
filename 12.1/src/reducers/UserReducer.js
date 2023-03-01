import { createReducer } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
const initialState = [
  {
    id: uuidv4(),
    username: 'Giuseppe',
    email: 'giuseppe@gmail.com',
    password: 'admin1',
  },
  {
    id: uuidv4(),
    username: 'Andrew',
    email: 'stanton@wp.pl',
    password: 'admin1',
  },
  {
    id: uuidv4(),
    username: 'Sidney',
    email: 'lumet@studms.ug.edu.pl',
    password: 'admin1',
  },
  {
    id: uuidv4(),
    username: 'Florian',
    email: 'zeller@gmail.com',
    password: 'admin1',
  },
];
export const UserReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('ADD_USER', (state, action) => {
      return [...state, action.payload];
    })
    .addCase('EDIT_USER', (state, action) => {
      return state.reduce((acc, el) => {
        return [
          ...acc,
          el.id === action.payload.id
            ? {
                ...el,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
              }
            : el,
        ];
      }, []);
    })
    .addCase('DELETE_USER', (state, action) => {
      return state.filter((user) => user.id != action.payload);
    });
});
