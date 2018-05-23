import {combineReducers} from 'redux';
import account from './account';
import {usersReducer} from './usersReducer';
import {productsReducer} from './productsReducer'
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  // short hand property names
  form: reduxFormReducer,
  account,
  productsReducer,
  usersReducer,
})

export default rootReducer;