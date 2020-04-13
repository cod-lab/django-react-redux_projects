import axios from "axios";

import { GET_LEADS } from './types';

get leads
export const getLeads = () => dispatch => {
    axios.get("/api/leads/")
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payloads: res.data
            })
        }

}