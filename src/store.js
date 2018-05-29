import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import thunk from 'redux-thunk';
// import account from './reducers/account';
import rootReducer from './reducers';
import {loadAuthToken} from './utils/localStorage';
import {setAuthToken, refreshAuthToken} from './actions/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer, composeEnhancers(applyMiddleware(thunk)
));

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    //console.log("In the store, token is ",authToken);
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;

//export default store;