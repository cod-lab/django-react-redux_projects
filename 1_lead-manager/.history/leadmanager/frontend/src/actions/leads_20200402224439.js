import axios from "axios";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';

// Get Leads
export const getLeads = () => dispatch => {
    axios.get('/api/leads/')                                // send 'get' request to '/api/leads/' to all get leads from the server(django)
        .then(res => {
            dispatch({
            // dispatch(send) 'getLead' to reducer('leadmanager/frontend/src/reducers/leads.js') to display all leads on web
                type: GET_LEADS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

// Del Lead
export const deleteLead = (id) => dispatch => {
    axios.delete(`/api/leads/${id}/`)                       // send 'delete' request to '/api/leads/' to delete that lead from the server(django)
        .then(res => {
            dispatch({
            // dispatch(send) 'deleteLead' to reducer('leadmanager/frontend/src/reducers/leads.js') to delete that lead and display the remaining leads
                type: DELETE_LEAD,
                payload: id
            });
        }).catch(err => console.log(err));
};

// Add Lead
export const addLead = (lead) => dispatch => {
    axios.post('/api/leads/', lead)                         // send 'post' request to '/api/leads/', adding a 'lead' into the server(django)
        .then(res => {
            dispatch({
            // dispatch(send) 'addLead' to reducer('leadmanager/frontend/src/reducers/leads.js') to delete it and display the remaining leads
                type: ADD_LEAD,
                payload: res.data
            });
        }).catch(err => console.log(err));
};