import { CREATE_MESSAGE, GET_ERRORS } from './types.js';

// CREATE MESSAGE
export const createMessage = msg => {
    // variable 'createMessage' has a parameter 'msg' which will hold the data(object)(apt. msg) when this variable is called from 'action'(leadmanager/frontend/src/actions/leads.js)
    return {
    // we not gonna make any asynchronous request with 'axios'
    // so, we dont have to pass in 'dispatch'
    // return(dispatch)(send) 'type' 'CREATE_MESSAGE' to 'reducer'(leadmanager/frontend/src/reducers/messages.js) to send 'msg' and,
    // 'reducer' sends it to component(leadmanger/frontend/src/components/leads/Alerts.js) to display the msg on webpg
        type: CREATE_MESSAGE,
        payload: msg                                        // msg object
        // when any event occurs on site by user, apt. msg for that event is sent to payload
    };
};

// RETURN ERRORS
export const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS,
        peyload: { msg, status }
    };
};
