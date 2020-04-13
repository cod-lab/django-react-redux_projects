import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore, applyMiddleware, compose } from 'redux';            // it is also correct in place of line 1,2 both
import thunk from 'redux-thunk';
import rootReducer from './reducers';       // rootReducers look for file 'index.js' in dir 'reducers'

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    // compose(applyMiddleware(...middleware))                             // it is also correct when using line 3
);

export default store;
