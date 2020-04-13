import { CREATE_MESSAGE } from './types.js';

// CREATE MESSAGE
export const createMessage = msg => {                       // 'createMessage' will take parameter 'msg'
    return {
    // we not gonna make any asynchronous request with 'axios'
    // so, we dont have to pass in 'dispatch'
    // so, we gonna return these below directly
    // dispatch(send) 'type' 'createMessage' to 'reducer'(leadmanager/frontend/src/reducers/messages.js) to send all the leads and,
    // 'reducer' sends it to component(leadmanger/frontend/src/components/leads/Alerts.js) to display only remaining leads
        type: CREATE_MESSAGE,
        payload: msg                                        // msg object
        // when any event occurs on site by user, apt. msg for that event is sent to payload
    };
};