import { CREATE_MESSAGE } from './types.js';

// CREATE MESSAGE
export const createMessage = msg => {                       // it'll take 'msg' parameter
    return {
    // we not gonna make any asynchronous request with 'axios'
    // so, we dont have to pass in 'dispatch'
    // so, we gonna return these below directly
        type: CREATE_MESSAGE,
        payload: msg                                        // msg object
    };
};