import { GET_ERRORS } from '../actions/types.js';

const initialState = {
    msg: {},
    status: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return {                                            // send everything below to 'component'(leadmanager/frontend/src/components/layout/Alerts.js)
                msg: action.payload.msg,                        // receive msg as 'payload' from 'action'(leadmanager/frontend/src/actions/messages.js)
                status: action.payload.status                   // receive status as 'payload' from 'action'(leadmanager/frontend/src/actions/messages.js)
            };
        default:
            return state;
    }
}
