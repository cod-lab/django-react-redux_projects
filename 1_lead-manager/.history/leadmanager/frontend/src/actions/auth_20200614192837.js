import axios from "axios";                                              // importing 'axios' to make requests

import { returnErrors } from './messages';                              // using this to return any err generated here

import { USER_LOADING, USER_LOADED, AUTH_ERROR } from './types';

// Check token and load user
export const LoadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({ type: USER_LOADING });

    // Get token from the state
    const token = getState().auth.token;

    // Headers
    
}