import { CREATE_MESSAGE } from './types.js';

// CREATE MESSAGE
export const createMessage = msg => {                       // it'll take 'msg' parameter
    return {
        type: CREATE_MESSAGE,
        payload: msg
    };
};