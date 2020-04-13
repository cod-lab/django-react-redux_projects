import { CREATE_MESSAGE } from '../actions/types.js';

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case CREATE_MESSAGE:
            return (state = action.payload);                    // set the entire state to whatever we pass in which will be a msg object
        default:
            return state;
    }
}