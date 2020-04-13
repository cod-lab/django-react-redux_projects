import axios from "axios";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';

// Get Leads
export const getLeads = () => dispatch => {
    axios.get('/api/leads/')                                // get request to '/api/leads/'
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

// Del Lead
export const deleteLead = (id) => dispatch => {
    axios.delete(`/api/leads/${id}/`)                       // delete request to '/api/leads/', now it will be deleted from the server(django) too
        .then(res => {
            dispatch({
                type: DELETE_LEAD,                          // delete lead is getting dispatched to the reducer()
                payload: id
            });
        }).catch(err => console.log(err));
};

// Add Lead
export const addLead = (lead) => dispatch => {
    axios.post('/api/leads/', lead).then(res => {
            dispatch({
                type: ADD_LEAD,
                payload: res.data
            });
        }).catch(err => console.log(err));
};