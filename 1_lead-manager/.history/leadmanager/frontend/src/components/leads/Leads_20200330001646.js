import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads } from '../../actions/leads';

export class Leads extends Component {
    render() {
        return (
            <div>
                <h1>Leads List</h1>
            </div>
        )
    }
}

constant mapStateToProps = state => ({ leads: state.leads.leads });

export default connnect(mapStateToProps, { getLeads })(Leads);
