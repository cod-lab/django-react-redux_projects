import axios from "axios";                                              // importing 'axios' to make requests

import { returnErrors } from './messages';                              // using this to return any err generated here
// importing variable 'returnErrors' from 'action'(leadmanager/frontend/src/actions/messages.js) to call it from current file

import { USER_LOADING, USER_LOADED, AUTH_ERROR } from './types';

// Check token and load user
export const LoadUser = () => (dispatch, getState) => {
// sending loaded user to       server & reducer

    // User Loading
    dispatch({ type: USER_LOADING });

    // Get token from the state
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: { 'Content-Type': 'application/json' }
    }

    // if token, add to headers config
    if (token)
        config.headers['Autherization'] =  `Token ${token}`;

    axios.get('api/auth/user', config)
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({ type: AUTH_ERROR });
        });
}