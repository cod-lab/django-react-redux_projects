import axios from "axios";                                              // importing 'axios' to make requests

import { returnErrors } from './messages';                              // using this to return any err generated here
// importing variable 'returnErrors' from 'action'(leadmanager/frontend/src/actions/messages.js) to call it from current file

import { USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL } from './types';

// Check token and load user
export const loadUser = () => (dispatch, getState) => {
// sending loaded user to server(django) & reducer
// bringing in 'getState' which allows us to fetch something from the state
// here using this to get token if there's one

    // User Loading
    dispatch({ type: USER_LOADING });
    // dispatch(send) 'type' 'USER_LOADING' to 'reducer'(leadmanager/frontend/src/reducers/auth.js) to perform switch case 'USER_LOADING'
    // Precondition before making the request to get user

    // Get token from the state
    const token = getState().auth.token;
    // it'll give the token of the current state of the application
    // looking for token in 'reducer'(leadmanager/frontend/src/reducers/auth.js) which will come from localstorage if there's one

    // Headers
    const config = {                                                    // config object
        headers: { 'Content-Type': 'application/json' }                 // header object
    };

    // if token, add to headers config
    if (token)
        config.headers['Autherization'] =  `Token ${token}`;            // adding token to object 'header' in object 'config'

    axios.get('api/auth/user', config)          // send 'get' request to 'api/auth/user' along with object 'config' (which holds the given token) to get user from the server(django)
        .then(res => {
            dispatch({
            // dispatch(send) 'type' 'USER_LOADED' & 'payload' to 'reducer'(leadmanager/frontend/src/reducers/auth.js) to send user and,
            // 'reducer' sends it to 'component'(leadmanger/frontend/src/components/common/PrivateRoute.js) to display on web
                type: USER_LOADED,
                payload: res.data                                       // payload gets the user that returned from server
            });
        }).catch(err => {                                               // if user is not authenticated then there's no token that matches then
            dispatch(returnErrors(err.response.data, err.response.status));
            // call variable 'returnErrors' from 'action'(leadmanager/frontend/src/actions/messages.js) and,
            // pass the data(err.response.data, err.response.status) to it's parameters 'msg' & 'status' and,
            // dispatch(send) that variable to 'reducer'(leadmanager/frontend/src/reducers/errors.js)
            dispatch({ type: AUTH_ERROR });
            // dispatch(send) 'type' 'AUTH_ERROR' to 'reducer'(leadmanager/frontend/src/reducers/auth.js) to perform switch case 'AUTH_ERROR' to get everything to default
        });
};

// LOGIN USER
export const login = (username, password) => dispatch => {
    // sending user credentials to server(django) & reducer

        // Headers
        // const config = {                                                    // config object
        //     headers: { 'Content-Type': 'application/json' }                 // header object
        // };

        // Request Body
        const body = ({ username, password });                // convert a JavaScript object into a string

        axios.post('api/auth/login', body, config)          
        // send 'post' request to 'api/auth/login' along with 'body' (holding credentials) 
        // object 'config' here will hold the token returned from the server(django)
            .then(res => {
                dispatch({
                // dispatch(send) 'type' 'USER_LOADED' & 'payload' to 'reducer'(leadmanager/frontend/src/reducers/auth.js) to send user and,
                // 'reducer' sends it to 'component'(leadmanger/frontend/src/components/common/PrivateRoute.js) to display on web
                    type: LOGIN_SUCCESS,
                    payload: res.data                                       // payload gets the user that returned from server
                });
            }).catch(err => {                                               // if user is not authenticated then there's no token that matches then
                dispatch(returnErrors(err.response.data, err.response.status));
                // call variable 'returnErrors' from 'action'(leadmanager/frontend/src/actions/messages.js) and,
                // pass the data(err.response.data, err.response.status) to it's parameters 'msg' & 'status' and,
                // dispatch(send) that variable to 'reducer'(leadmanager/frontend/src/reducers/errors.js)
                dispatch({ type: LOGIN_FAIL });
                // dispatch(send) 'type' 'AUTH_ERROR' to 'reducer'(leadmanager/frontend/src/reducers/auth.js) to perform switch case 'AUTH_ERROR' to get everything to default
            });
    };