import { combineReducers, createStore } from 'redux';
import { TodoReducer } from '../reducers/TodoReducer';
import { NoteReducer } from '../reducers/NoteReducer';

const rootReducer = combineReducers({
  todo: TodoReducer,
  note: NoteReducer,
});
const store = createStore(rootReducer);
export default store;
