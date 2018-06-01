import {combineReducers} from 'redux';
import bugsReducer from './bugsReducer';
import authReducer from './authReducer';
import {usersReducer} from './usersReducer';
import {productsReducer} from './productsReducer'
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  // short hand property names
  form: reduxFormReducer,
  authReducer,
  bugsReducer,
  productsReducer,
  usersReducer
})

export default rootReducer;