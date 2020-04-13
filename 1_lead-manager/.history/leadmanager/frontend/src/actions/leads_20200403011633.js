import axios from "axios";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';

// Get Leads
export const getLeads = () => dispatch => {
    axios.get('/api/leads/')                                // send 'get' request to '/api/leads/' to get all leads from the server(django)
        .then(res => {
            dispatch({
            // dispatch(send) 'getLead' to 'reducer'('leadmanager/frontend/src/reducers/leads.js') to get all leads and,
            // send to component('leadmanger/frontend/src/components/leads/Leads.js') to display on web
                type: GET_LEADS,
                payload: res.data                           // payload gets the lead that returned from server
            });
        }).catch(err => console.log(err));
};

// Del Lead
export const deleteLead = (id) => dispatch => {
    axios.delete(`/api/leads/${id}/`)                       // send 'delete' request to '/api/leads/' to delete that lead from the server(django)
        .then(res => {
            dispatch({
            // dispatch(send) 'deleteLead' to 'reducer'('leadmanager/frontend/src/reducers/leads.js') to filter leads and,
            // send to component('leadmanger/frontend/src/components/leads/Leads.js') to display only remaining leads
                type: DELETE_LEAD,
                payload: id                                 // payload gets the lead that returned from server
            });
        }).catch(err => console.log(err));
};

// Add Lead
export const addLead = (lead) => dispatch => {
    axios.post('/api/leads/', lead)                         // send 'post' request to '/api/leads/' to add a 'lead' into the server(django)
        .then(res => {
            dispatch({
            // dispatch(send) 'addLead' to 'reducer'('leadmanager/frontend/src/reducers/leads.js') to add this lead to earlier leads and,
            // send to component('leadmanger/frontend/src/components/leads/Leads.js') to display them
                type: ADD_LEAD,
                payload: res.data                           // payload gets the leads that returned from server
            });
        }).catch(err => console.log(err));
};