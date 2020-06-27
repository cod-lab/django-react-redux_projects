import { CREATE_MESSAGE, GET_ERRORS } from './types.js';

// CREATE MESSAGE
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg                                // msg object
    };
};

// RETURN ERRORS
export const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status }                    // object with parameters 'msg' & 'status'
    };
};
