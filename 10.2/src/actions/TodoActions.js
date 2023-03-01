export const addTodo = (id, title, date, done) => ({
  type: 'ADD_TODO',
  payload: { id: id, title: title, date: date, done: done },
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  payload: { id: id },
});

export const editTodo = (id, title, date) => ({
  type: 'EDIT_TODO',
  payload: { id: id, title: title, date: date },
});

export const finishTodo = (id) => ({
  type: 'FINISH_TODO',
  payload: { id: id },
});
