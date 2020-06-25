import axios from "axios";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';

import { createMessage, returnErrors } from './messages';
// importing variables 'createMessage' & 'returnErrors' from 'action'(leadmanager/frontend/src/actions/messages.js) to call it from current file

import { tokenConfig } from './auth';                       // importing 'cls' 'tokenConfig' from 'action' 'auth' to get the logged-in user's token

// Get Leads
export const getLeads = () => (dispatch, getState) => {
    // sending stored 'leads' in 'prop' 'getLeads' to server & reducer
    // getState = bringing in 'getState' which allows us to fetch something from the state

    axios.get('/api/leads/', tokenConfig(getState))
    // send 'get' request to '/api/leads/' to get all leads from the server(django)
    // tokenConfig(getState) = calling cls imported from 'action'(leadmanager/frontend/src/actions/auth.js)
    // tokenConfig(getState) = it is a cls here returning(giving) the variable 'config' containing the logged-in user's token to this cls
    
        .then(res => {
            dispatch({
            // dispatch(send) 'type' 'GET_LEADS' & 'payload' to 'reducer'(leadmanager/frontend/src/reducers/leads.js) to send all the leads and,
            // 'reducer' sends it to component(leadmanger/frontend/src/components/leads/Leads.js) to display on web
                type: GET_LEADS,
                payload: res.data                           // payload gets the leads that returned from server
            });
        // }).catch(err => console.log(err));
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
        // call variable 'returnErrors' from 'action'(leadmanager/frontend/src/actions/messages.js) and,
        // pass the data(err.response.data, err.response.status) to it's parameters 'msg' & 'status' and,
        // dispatch(send) that variable to 'reducer'(leadmanager/frontend/src/reducers/errors.js)
};

// Del Lead
export const deleteLead = (id) => (dispatch, getState) => {     // sending stored 'id' of deleted 'lead' in 'prop' 'deleteLead' to server & reducer
    axios.delete(`/api/leads/${id}/`, tokenConfig(getState))    
    // send 'delete' request to '/api/leads/' to delete that lead from the server(django) and delete it here only
    // tokenConfig(getState) = calling cls imported from 'action'(leadmanager/frontend/src/actions/auth.js)
    // getState = bringing in 'getState' which allows us to fetch something from the state, basically generated user token
    
        .then(res => {
            dispatch(createMessage({ deleteLead: 'Lead Deleted' }));
            // call variable 'createMessage' from 'action'(leadmanager/frontend/src/actions/messages.js) and,
            // pass the data(object) to it's parameter 'msg' and,
            // dispatch(send) that variable to 'reducer'(leadmanager/frontend/src/reducers/messages.js)
            dispatch({
            // dispatch(send) 'type' 'DELETE_LEAD' & 'payload' to 'reducer'(leadmanager/frontend/src/reducers/leads.js) to filter leads and,
            // 'reducer' sends it to component(leadmanger/frontend/src/components/leads/Leads.js) to display only remaining leads
                type: DELETE_LEAD,
                payload: id                                 // when we delete a lead from server that lead is sent to payload with all its details
            });
        }).catch(err => console.log(err));
};

// Add Lead
export const addLead = (lead) => (dispatch, getState) => {      // sending stored 'lead' in 'prop' 'addLead' to server & reducer
    axios.post('/api/leads/', lead, tokenConfig(getState))      // send 'post' request to '/api/leads/' to add a 'lead' into the server(django) and add it here only
        .then(res => {
            dispatch(createMessage({ addLead: 'Lead Added' }));         // msg object = {}
            // call variable 'createMessage' from 'action'(leadmanager/frontend/src/actions/messages.js) and,
            // pass the data(object) to it's parameter 'msg' and,
            // dispatch(send) that variable to 'reducer'(leadmanager/frontend/src/reducers/messages.js)
            dispatch({
            // dispatch(send) 'type' 'ADD_LEAD' & 'payload' to 'reducer'(leadmanager/frontend/src/reducers/leads.js) to add this lead to earlier leads and,
            // 'reducer' sends it to component(leadmanger/frontend/src/components/leads/Leads.js) to display them
                type: ADD_LEAD,
                payload: res.data                           // when we add a lead to server that lead is sent to payload with all its details
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
        // call variable 'returnErrors' from 'action'(leadmanager/frontend/src/actions/messages.js) and,
        // pass the data(err.response.data, err.response.status) to it's parameters 'msg' & 'status' and,
        // dispatch(send) that variable to 'reducer'(leadmanager/frontend/src/reducers/errors.js)

        //OLD--
        // }).catch(err => console.log(err.response.data));

        // }).catch(err => {
        //     const getErrors = {
        //         msg: err.response.data,
        //         // receive err msg (generated from server) from 'component'(leadmanager/frontend/src/components/layout/Alerts.js)
        //         status: err.response.status
        //         // receive err status (generated from server) from 'component'(leadmanager/frontend/src/components/layout/Alerts.js)
        //     };
        //     dispatch({
        //     // dispatch(send) 'type' 'GET_ERRORS' to 'reducer'(leadmanager/frontend/src/reducers/errors.js) and,
        //     // 'reducer' sends it to component(leadmanger/frontend/src/components/leads/Alerts.js) to display apt. err on webpg for performed action
        //         type: GET_ERRORS,
        //         payload: getErrors                          // when any err is generated on srvr, it is sent to payload with all required details
        //     });
        // });
};
 