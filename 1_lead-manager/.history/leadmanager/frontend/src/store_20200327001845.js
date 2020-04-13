import { createStore, applyMiddleware } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';            // it is also correct
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';       // rootReducers look for file 'index.js' in dir 'reducers'

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    // composeWithDevTools(applyMiddleware(...middleware))
    compose(applyMiddleware(...middleware))
);

export default store;
