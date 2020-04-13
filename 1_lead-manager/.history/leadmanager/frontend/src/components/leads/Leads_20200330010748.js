import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads } from '../../actions/leads';

export class Leads extends Component {
    
    static propTypes = { leads: PropTypes.array.isRequired };

    componentDidMount() {
        this.props.getLeads();
    }

    render() {
        return (
            <Fragment>
                <h2>Leads</h2>
                <table className="table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th />                      {/* for lead btn */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leads.map(leads => (
                            <tr key={leads.id}>
                                <td>{leads.name}</td>
                                <td>{leads.email}</td>
                                <td>{leads.message}</td>
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

export default connect(mapStateToProps, { getLeads })(Leads);
