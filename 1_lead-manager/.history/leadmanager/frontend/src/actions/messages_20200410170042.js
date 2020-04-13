import { CREATE_MESSAGE } from './types.js';

// CREATE MESSAGE
export const createMessage = msg => {                       // 'createMessage' will take 'msg' parameter
    return {
    // we not gonna make any asynchronous request with 'axios'
    // so, we dont have to pass in 'dispatch'
    // so, we gonna return these below directly
        type: CREATE_MESSAGE,
        payload: msg                                        // msg object
        // when any event occurs, apt. msg for that event is sent to payload
    };
};