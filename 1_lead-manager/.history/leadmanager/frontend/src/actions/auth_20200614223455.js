import axios from "axios";                                              // importing 'axios' to make requests

import { returnErrors } from './messages';                              // using this to return any err generated here
// importing variable 'returnErrors' from 'action'(leadmanager/frontend/src/actions/messages.js) to call it from current file

import { USER_LOADING, USER_LOADED, AUTH_ERROR } from './types';

// Check token and load user
export const LoadUser = () => (dispatch, getState) => {
// sending loaded user to server(django) & reducer
// bringing in 'getState' which allows to fetch something from the state

    // User Loading
    dispatch({ type: USER_LOADING });
    // dispatch(send) 'type' 'USER_LOADING' to 'reducer'(leadmanager/frontend/src/reducers/auth.js) to perform switch case 'USER_LOADING'

    // Get token from the state
    const token = getState().auth.token;
    // it'll give the token of the current state of the application

    // Headers
    const config = {
        headers: { 'Content-Type': 'application/json' }
    }

    // if token, add to headers config
    if (token)
        config.headers['Autherization'] =  `Token ${token}`;

    axios.get('api/auth/user', config)
    // send 'get' request to 'api/auth/user' along with variable 'config' (which holds the given token) to get user from the server(django)
        .then(res => {
            dispatch({
            // dispatch(send) 'type' 'USER_LOADED' & 'payload' to 'reducer'(leadmanager/frontend/src/reducers/auth.js) to send user and,
            // 'reducer' sends it to component(leadmanger/frontend/src/components/leads/Leads.js) to display on web
                type: USER_LOADED,
                payload: res.data                           // payload gets the user that returned from server
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            // call variable 'returnErrors' from 'action'(leadmanager/frontend/src/actions/messages.js) and,
            // pass the data(err.response.data, err.response.status) to it's parameters 'msg' & 'status' and,
            // dispatch(send) that variable to 'reducer'(leadmanager/frontend/src/reducers/errors.js)
            dispatch({ type: AUTH_ERROR });
            // dispatch(send) 'type' 'AUTH_ERROR' to 'reducer'(leadmanager/frontend/src/reducers/auth.js) to perform switch case 'AUTH_ERROR' to get everything to default
        });
}
