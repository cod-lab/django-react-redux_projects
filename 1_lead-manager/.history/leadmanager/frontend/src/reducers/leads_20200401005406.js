import { GET_LEADS, DELETE_LEAD } from '../actions/types.js';        // get the leads from backend and display them here in the leads list component

const initialState = { leads: [] };

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_LEADS:
            return {
                ...state,
                // it includes all the data in variable 'initialState'
                // this 'state' is send to 'leadmanger/frontend/src/components/leads/Leads.js'
                        // it includes whatever in the 'initialState' apart from leads, currently there is nothing except leads
                leads: action.payload                   // send leads as payload in the action, payload is the lead that returned from the server
            };
        case DELETE_LEAD:
            return {
                ...state
                leads: state.leads.filter(lead => lead.id !== action.payload)
            }
        default:
            return state;
    }
}