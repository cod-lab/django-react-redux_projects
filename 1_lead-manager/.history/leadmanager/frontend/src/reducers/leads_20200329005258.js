import { GET_LEADS } from '../actions/types.js';        // get the leads from backend and display them here in the leads list component

const initialState = {
    // something: 'asdasd',
    leads: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_LEADS:
            return {
                ...state,                   // it includes whatever in the initialState apart from leads, currently there is nothing except leads
                leads: action.payload
            };
        default:
            return state;
    }
}