import { combineReducers } from 'redux';
import auth from './auth'
import profile from './profile'
import types from './types'

const reducers = combineReducers({
  auth,
  profile,
  types
});

export default reducers;
