import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from '../actions/types.js';        // get the leads from backend and display them here in the leads list component

const initialState = { leads: [] };

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_LEADS:
            return {                        // send everything below to 'component'('leadmanager/frontend/src/components/leads/Leads.js')
                ...state,                   // it includes all the data of variable 'initialState'
                leads: action.payload                   
                // receive leads as 'payload' from 'action'('leadmanager/frontend/src/actions/leads.js')
                // 'payload' is the lead that returned from server
            };
        case DELETE_LEAD:
            return {                        // send everything below to 'component'('leadmanager/frontend/src/components/leads/Leads.js')
                ...state,                   // it includes all the data of variable 'initialState'
                leads: state.leads.filter(lead => lead.id !== action.payload)
                // it filter through and only sends the id which are !== deleted lead
                // 'filter' is a high order array method
                // earlier in 'postman' for deleting we sent the 'id' as the 'payload', so we do the same here
                // deleted lead is stored in 'payload' in 'action'('leadmanager/frontend/src/actions/leads.js') and sent here
                        // so this'll del 'lead' on the srvr, then run the 'reducer' and then del it within the UI
            };
        case ADD_LEAD:
            return {
                ...state,                   // it includes all the data of variable 'initialState'
                leads: [
                    ...state.leads,         // leads already there
                    action.payload          // new lead
                ]
            };
        default:
            return state;
    }
}