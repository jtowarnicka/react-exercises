const currentUserReducer = (state = '', action) => {
  switch (action.type) {
    case 'CURRENT_USER':
      return action.user;
    default:
      return state;
  }
};
export default currentUserReducer;
