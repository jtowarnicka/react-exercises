import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from './reducers/UserReducer';

const store = configureStore({
  reducer: {
    users: UserReducer,
  },
});
export default store;
