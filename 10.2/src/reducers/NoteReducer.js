export const NoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.payload];
    case 'UPDATE_NOTE':
      return state.reduce((acc, el) => {
        return [
          ...acc,
          el.id === action.payload.id
            ? {
                ...el,
                content: action.payload.content,
              }
            : el,
        ];
      }, []);
    case 'DELETE_NOTE':
      return state.filter((note) => note.id !== action.payload.id);
    default:
      return state;
  }
};
