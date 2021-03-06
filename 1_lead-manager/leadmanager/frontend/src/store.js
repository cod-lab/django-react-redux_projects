import { createStore, applyMiddleware } from 'redux';                       // 'createStore' is actually responsible for creating the store
import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore, applyMiddleware, compose } from 'redux';           // it is also correct in place of both line 1,2 combined
import thunk from 'redux-thunk';
import rootReducer from './reducers';                                       // 'rootReducer' looks for the file 'index.js' in dir 'reducers'

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    // compose(applyMiddleware(...middleware))                              // it is also correct if using line 3
);

export default store;
