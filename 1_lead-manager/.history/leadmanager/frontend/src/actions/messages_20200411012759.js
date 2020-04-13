import { CREATE_MESSAGE } from './types.js';

// CREATE MESSAGE
export const createMessage = msg => {                       // 'createMessage' will have parameter 'msg' which will hold the apt. msg when this 'action' is called from 'action'(leadmanager/frontend/src/actions/leads.js)
    return {
    // we not gonna make any asynchronous request with 'axios'
    // so, we dont have to pass in 'dispatch'
    // return(dispatch)(send) 'type' 'createMessage' to 'reducer'(leadmanager/frontend/src/reducers/messages.js) to send msg and,
    // 'reducer' sends it to component(leadmanger/frontend/src/components/leads/Alerts.js) to display the msg on webpg
        type: CREATE_MESSAGE,
        payload: msg                                        // msg object
        // when any event occurs on site by user, apt. msg for that event is sent to payload
    };
};