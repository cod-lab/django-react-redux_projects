import axios from "axios";

import { GET_LEADS } from './types';

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
export const delLeads = (id) => dispatch => {
    axios.delete(`/api/leads/{id}/`).then(res => {
            dispatch({
                type: DELETE_LEADS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};