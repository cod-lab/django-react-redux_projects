import axios from "axios";

import { GET_LEADS, DELETE_LEAD } from './types';

// Get Leads
export const getLeads = () => dispatch => {
    axios.get('/api/leads/').then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

// Del Lead
export const deleteLead = (id) => dispatch => {
    axios.get(`/api/leads/${id}/`).then(res => {
            dispatch({
                type: DELETE_LEAD,                          // delete lead is getting dispatched to the reducer()
                payload: id
            });
        }).catch(err => console.log(err));
};