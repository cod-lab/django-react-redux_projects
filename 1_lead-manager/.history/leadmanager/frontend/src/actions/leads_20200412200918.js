import axios from "axios";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';

import { createMessage, returnErrors } from './messages';
// importing variables 'createMessage' & 'returnErrors' from 'action'(leadmanager/frontend/src/actions/messages.js) to call it from this file

// Get Leads
export const getLeads = () => dispatch => {                 // sending stored 'leads' in 'prop' 'getLeads' to server & reducer
    axios.get('/api/leads/')                                // send 'get' request to '/api/leads/' to get all leads from the server(django)
        .then(res => {
            dispatch({
            // dispatch(send) 'type' 'GET_LEADS' to 'reducer'(leadmanager/frontend/src/reducers/leads.js) to send all the leads and,
            // 'reducer' sends it to component(leadmanger/frontend/src/components/leads/Leads.js) to display on web
                type: GET_LEADS,
                payload: res.data                           // payload gets the leads that returned from server
            });
            .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
        // }).catch(err => console.log(err));
};

// Del Lead
export const deleteLead = (id) => dispatch => {             // sending stored 'id' of deleted 'lead' in 'prop' 'deleteLead' to server & reducer
    axios.delete(`/api/leads/${id}/`)                       // send 'delete' request to '/api/leads/' to delete that lead from the server(django) and delete it here only
        .then(res => {
            dispatch(createMessage({ deleteLead: 'Lead Deleted' }));
            // call variable 'createMessage' from 'action'(leadmanager/frontend/src/actions/messages.js) and,
            // pass the data(object) to it's parameter 'msg' and,
            // dispatch(send) that variable to 'reducer'(leadmanager/frontend/src/reducers/messages.js)
            dispatch({
            // dispatch(send) 'type' 'DELETE_LEAD' to 'reducer'(leadmanager/frontend/src/reducers/leads.js) to filter leads and,
            // 'reducer' sends it to component(leadmanger/frontend/src/components/leads/Leads.js) to display only remaining leads
                type: DELETE_LEAD,
                payload: id                                 // when we delete a lead from server that lead is sent to payload with all its details
            });
        }).catch(err => console.log(err));
};

// Add Lead
export const addLead = (lead) => dispatch => {              // sending stored 'lead' in 'prop' 'addLead' to server & reducer
    axios.post('/api/leads/', lead)                         // send 'post' request to '/api/leads/' to add a 'lead' into the server(django) and add it here only
        .then(res => {
            dispatch(createMessage({ addLead: 'Lead Added' }));         // msg object = {}
            // call variable 'createMessage' from 'action'(leadmanager/frontend/src/actions/messages.js) and,
            // pass the data(object) to it's parameter 'msg' and,
            // dispatch(send) that variable to 'reducer'(leadmanager/frontend/src/reducers/messages.js)
            dispatch({
            // dispatch(send) 'type' 'ADD_LEAD' to 'reducer'(leadmanager/frontend/src/reducers/leads.js) to add this lead to earlier leads and,
            // 'reducer' sends it to component(leadmanger/frontend/src/components/leads/Leads.js) to display them
                type: ADD_LEAD,
                payload: res.data                           // when we add a lead to server that lead is sent to payload with all its details
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
        // }).catch(err => console.log(err.response.data));
};
