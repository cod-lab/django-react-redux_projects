import { GET_ERRORS, GET_LEADS } from '../actions/types.js';

const initialState = {
    msg: {},
    status: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return {
                
            }
        default:
            return state;
    }
}