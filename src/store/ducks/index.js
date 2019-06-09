import { combineReducers } from 'redux';
import auth from './auth'
const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  example: () => [],
  auth
});

export default reducers;
