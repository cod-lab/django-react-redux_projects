import { combineReducers } from 'redux';
import leads from './leads';
import errors from './errors';

export default combineReducers({
    // leads: leads
    // leadsReducer: leads
    // both above lines are correct, any1 can be used in place of line 8
    leads,
    errors
}); 