import { v4 as uuidv4 } from 'uuid';
export const addUser = (user) => ({
  type: 'ADD_USER',
  payload: { ...user, id: uuidv4() },
});

export const editUser = (user) => ({
  type: 'EDIT_USER',
  payload: { ...user },
});

export const deleteUser = (id) => ({
  type: 'DELETE_USER',
  payload: id,
});
