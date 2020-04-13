import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';                                      // 'connect' is used to work with 'redux' from any 'component'
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';                 // we call getleads when 'component' mounts (basically when calling fn 'componentDidMount')

export class Leads extends Component {
    
    static propTypes = { leads: PropTypes.array.isRequired };               // creating a 'prop' 'leads'
    // getting 'leads' from variable 'MapStateToProps' (written below) and converting to props
    // getting 'prop' 'leads' from variable 'MapStateToProps' written below

    componentDidMount() {
        this.props.getLeads();                                              
        // calling variable 'getLeads' from 'leadmanger/frontend/src/actions/leads.js'
        // leads come down from the 'reducer' into the 'component' as a 'prop'
    }

    render() {
        return (
            <Fragment>
                <h2>Leads</h2>
                <table className="table table-striped">                     {/* all leads inside this table */}
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
                                <td><button className="btn btn-danger btn-sm">DELETE</button></td>
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
// 'state.leads' = 'state' = it is the leads reducer exported from 'leadmanger/frontend/src/reducers/index.js'
// '.leads' = "initialState = { leads: [] };" from 'leadmanger/frontend/src/reducers/leads.js'
// '.leads' is the part of the state we want

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
// cls 'Leads' is the 'component' here wrapped thru 'connect' using '()'
// 'mapStateToProps' is giving the 'states' 'leadmanger/frontend/src/reducers/index.js'
// 'getLeads' is giving the 'leads' from 'leadmanger/frontend/src/actions/leads.js'
