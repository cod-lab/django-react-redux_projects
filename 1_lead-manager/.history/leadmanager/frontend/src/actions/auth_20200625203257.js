import axios from "axios";                                              // importing 'axios' to make requests to server(django)

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

    axios.get('api/auth/user', tokenConfig(getState))
    // send 'get' request to 'api/auth/user' along with object 'config' (which holds the given token) to get user from the server(django)
    // tokenConfig(getState) = it is cls here returning(giving) the variable 'config' containing the logged-in user's token to this cls
        .then(res => {
            dispatch({
            // dispatch(send) 'type' 'USER_LOADED' & 'payload' to 'reducer'(leadmanager/frontend/src/reducers/auth.js) to send user and,
            // 'reducer' sends it to 'component'(leadmanger/frontend/src/components/common/PrivateRoute.js) to display on web
                type: USER_LOADED,
                payload: res.data                                       // payload gets the user details(id,username,email) that returned from server
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

// REGISTER USER
export const register = ({ username, password, email }) => dispatch => {              // sending user credentials to server(django) & reducer

    // Headers
    const config = {                                                    // config object
        headers: { 'Content-Type': 'application/json' }                 // header object
    };

    // Request Body
    const body = JSON.stringify({ username, password });                // convert JavaScript object into string and passing this along with 'post' request below

    axios.post('api/auth/login', body, config)
    // send 'post' request to 'api/auth/login' along with 'body'(holding credentials) & 'config'(currently empty)
    // object 'config' here will hold the token returned from the server(django) to log in
        .then(res => {
            dispatch({
            // dispatch(send) 'type' 'LOGIN_SUCCESS' & 'payload' to 'reducer'(leadmanager/frontend/src/reducers/auth.js) (to send user along with token) and,
            // 'reducer' sends it to 'component'(leadmanger/frontend/src/components/common/Login.js) to login and redirect to 'Dashboard'
                type: LOGIN_SUCCESS,
                payload: res.data                                       // payload gets the data(token,id,username,email) which returned from server
            });
        }).catch(err => {                                               // if user unables to login (due to wrong credentials maybe) then
            dispatch(returnErrors(err.response.data, err.response.status));
            // call variable 'returnErrors' from 'action'(leadmanager/frontend/src/actions/messages.js) and,
            // pass the data(err.response.data, err.response.status) to it's parameters 'msg' & 'status' and,
            // dispatch(send) that variable to 'reducer'(leadmanager/frontend/src/reducers/errors.js)
            dispatch({ type: LOGIN_FAIL });
            // dispatch(send) 'type' 'LOGIN_FAIL' to 'reducer'(leadmanager/frontend/src/reducers/auth.js) to perform switch case 'LOGIN_FAIL' to get everything to default
        });
};

// LOGIN USER
export const login = (username, password) => dispatch => {              // sending user credentials to server(django) & reducer

    // Headers
    const config = {                                                    // config object
        headers: { 'Content-Type': 'application/json' }                 // header object
    };

    // Request Body
    const body = JSON.stringify({ username, password });                // convert JavaScript object into string and passing this along with 'post' request below

    axios.post('api/auth/login', body, config)
    // send 'post' request to 'api/auth/login' along with 'body'(holding credentials) & 'config'(currently empty)
    // object 'config' here will hold the token returned from the server(django) to log in
        .then(res => {
            dispatch({
            // dispatch(send) 'type' 'LOGIN_SUCCESS' & 'payload' to 'reducer'(leadmanager/frontend/src/reducers/auth.js) (to send user along with token) and,
            // 'reducer' sends it to 'component'(leadmanger/frontend/src/components/common/Login.js) to login and redirect to 'Dashboard'
                type: LOGIN_SUCCESS,
                payload: res.data                                       // payload gets the data(token,id,username,email) which returned from server
            });
        }).catch(err => {                                               // if user unables to login (due to wrong credentials maybe) then
            dispatch(returnErrors(err.response.data, err.response.status));
            // call variable 'returnErrors' from 'action'(leadmanager/frontend/src/actions/messages.js) and,
            // pass the data(err.response.data, err.response.status) to it's parameters 'msg' & 'status' and,
            // dispatch(send) that variable to 'reducer'(leadmanager/frontend/src/reducers/errors.js)
            dispatch({ type: LOGIN_FAIL });
            // dispatch(send) 'type' 'LOGIN_FAIL' to 'reducer'(leadmanager/frontend/src/reducers/auth.js) to perform switch case 'LOGIN_FAIL' to get everything to default
        });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
// dispatch(send) 'type' 'LOGOUT_SUCCESS' to call this 'switch case' stored in 'reducer'(leadmanager/frontend/src/reducers/auth.js)
// bringing in 'getState' which allows us to fetch something from the state
// here using this to get token if there's one

    axios.post('api/auth/logout', null, tokenConfig(getState))
    // send 'get' request to 'api/auth/logout' along with object 'config' (which holds the given token) to get user from the server(django)
    // tokenConfig(getState) = it is cls here returning(giving) the variable 'config' containing the logged-in user's token to this cls
        .then(res => {
            dispatch({
            // dispatch(send) 'type' 'LOGOUT_SUCCESS' to 'reducer'(leadmanager/frontend/src/reducers/auth.js) to get user logged out
            // 'reducer' sends it to 'component'(leadmanger/frontend/src/components/layout/Header.js)
                type: LOGOUT_SUCCESS
            });
        }).catch(err => {                                               // if any err arises when logging out, it will dispatch the err to web
            dispatch(returnErrors(err.response.data, err.response.status));
            // call variable 'returnErrors' from 'action'(leadmanager/frontend/src/actions/messages.js) and,
            // pass the data(err.response.data, err.response.status) to it's parameters 'msg' & 'status' and,
            // dispatch(send) that variable to 'reducer'(leadmanager/frontend/src/reducers/errors.js)
        });
};

// Setup config with token - helper function
export const tokenConfig = getState => {

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
        config.headers['Authorization'] =  `Token ${token}`;            // adding token to object 'header' in object 'config'

    return config;
}