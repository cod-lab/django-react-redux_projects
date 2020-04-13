import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';                                  // 'connect' is used to work with 'redux' from any 'component'
import PropTypes from 'prop-types';
import { getLeads } from '../../actions/leads';                             // we call getleads when 'component' mounts (when calling fn 'componentDidMount')

export class Leads extends Component {
    
    static propTypes = { leads: PropTypes.array.isRequired };

    componentDidMount() {
        this.props.getLeads();                                              // leads come down from the 'reducer' into the 'component' as a 'prop'
    }

    render() {
        return (
            <Fragment>
                <h2>Leads</h2>
                <table className="table table-striped">
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

const mapStateToProps = state => ({ leads: state.leads.leads });            // get state from 'leadmanger/frontend/src/reducers/leads.js'

export default connect(mapStateToProps, { getLeads })(Leads);               // cls 'Leads' is the 'component' here wrapped thru 'connect' using '()'
