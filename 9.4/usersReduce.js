const usersReduce = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.user];
    case 'REMOVE_USER':
      return state.filter((user) => user.username != action.username);
    case 'UPDATE_USER':
      return state.reduce((acc, el) => {
        return [
          ...acc,
          el.username === action.username
            ? {
                ...el,
                ...action.updatedUser,
              }
            : el,
        ];
      }, []);
    default:
      return state;
  }
};
export default usersReduce;
