export const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id != action.payload.id);
    case 'EDIT_TODO':
      return state.reduce((acc, el) => {
        return [
          ...acc,
          el.id === action.payload.id
            ? {
                id: el.id,
                title: action.payload.title,
                date: action.payload.date,
                done: el.done,
              }
            : el,
        ];
      }, []);
    case 'FINISH_TODO':
      return state.reduce((acc, el) => {
        return [
          ...acc,
          el.id === action.payload.id
            ? {
                ...el,
                done: !el.done,
              }
            : el,
        ];
      }, []);
    default:
      return state;
  }
};
