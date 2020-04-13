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
export const delLeads = () => dispatch => {
    axios.delete('/api/leads/').then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};