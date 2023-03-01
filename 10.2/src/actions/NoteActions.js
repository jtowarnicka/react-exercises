export const addNote = (id, content) => ({
  type: 'ADD_NOTE',
  payload: { id: id, content: content },
});

export const updateNote = (id, content) => ({
  type: 'UPDATE_NOTE',
  payload: { id: id, content: content },
});

export const deleteNote = (id) => ({
  type: 'DELETE_NOTE',
  payload: { id: id },
});
