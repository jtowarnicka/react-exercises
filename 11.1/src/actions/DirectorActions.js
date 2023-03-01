import { v4 as uuidv4 } from 'uuid';
export const addDirector = (director) => ({
  type: 'ADD_DIRECTOR',
  payload: { ...director, id: uuidv4() },
});

export const editDirector = (director) => ({
  type: 'EDIT_DIRECTOR',
  payload: { ...director },
});
