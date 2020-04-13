import { CREATE_MESSAGE } from '../actions/types.js';

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case CREATE_MESSAGE:
            return (state = action.payload);
            // set the entire state to whatever we pass i.e. that msg, in which, will be a msg object
            // receive msg as 'payload' from 'action'(leadmanager/frontend/src/actions/messages.js) and,
            // send to 'component'(leadmanager/frontend/src/components/layout/Alerts.js)
        default:
            return state;
    }
}