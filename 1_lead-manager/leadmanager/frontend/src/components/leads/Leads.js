import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';                                      // 'connect' is used to work with 'redux' from any 'component'(current file)
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';                 // we call 'getleads' when 'component' mounts (basically when calling fn 'componentDidMount')

export class Leads extends Component {

    static propTypes = {
        leads: PropTypes.array.isRequired,                                  // creating a 'prop' 'leads'
        // getting 'leads' from variable 'MapStateToProps' (written below) and converting to 'props'
        getLeads: PropTypes.func.isRequired,                                // creating a 'prop' 'getLeads'
        deleteLead: PropTypes.func.isRequired                               // creating a 'prop' 'deleteLead'
    };

    componentDidMount() {                                                   // this will be called just after component is mounted
        this.props.getLeads();
        // calling variable 'getLeads' from 'leadmanger/frontend/src/actions/leads.js'
        // leads come down from the 'reducer' into the 'component' as a 'prop'
        // 'getLeads' here is getting the 'leads' from 'reducer'(leadmanager/frontend/src/reducers/leads.js) which is getting it from 'action'(leadmanger/frontend/src/actions/leads.js)
    }

    render() {
        return (
            <Fragment>
                <h2>Leads</h2>
                <table className="table table-striped">                     {/* all leads are inside this table */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th />                                          {/* for del-lead btn */}
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.leads.map(lead => (
                            <tr key={lead.id}>
                                <td>{lead.id}</td>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.message}</td>
                                <td><button onClick={this.props.deleteLead.bind(this, lead.id)} className="btn btn-danger btn-sm">DELETE</button></td>
                                {/* 'this.props.deleteLead()' will give access to 'prop' 'deleteLead' created above */}
                                {/* delete the 'lead' from frontend */}
                                {/* store the deleted 'lead' data into 'prop' 'deleteLead' when user deletes that 'lead' */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({ leads: state.leads.leads });
// this will get state from 'leadmanger/frontend/src/reducers/leads.js'
// this will map state to props of this component
// 'leads:' = 'prop' = declared above, all 'states' mapped into this 'prop'
// 'state.leads' = 'state' = it is the leads reducer imported from 'leadmanger/frontend/src/reducers/index.js'
// '.leads' = "initialState = { leads: [] };" from 'leadmanger/frontend/src/reducers/leads.js'
// '.leads' is the part of the state we want

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
// sending 'props' 'getLeads', 'deleteLead' to 'action'(leadmanager/frontend/src/actions/leads.js) to delete 'lead' from server(django) too
// cls 'Leads' is a 'component' here wrapped thru 'connect' using '()'
// 'mapStateToProps' is giving the 'states' from 'leadmanger/frontend/src/reducers/index.js'
// 'getLeads' & 'deleteLead' are 'props' here, created above
