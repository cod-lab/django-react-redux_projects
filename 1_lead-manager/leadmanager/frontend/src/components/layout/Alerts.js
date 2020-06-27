import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {

    static propTypes = { 
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps) {

        const { error, alert, message } = this.props;

        // ERRORS
        if (error !== prevProps.error) {
            if (error.msg.name)
                alert.error(`name: ${error.msg.name.join()}`);
            if (error.msg.email)
                alert.error(`email: ${error.msg.email.join()}`);
            if (error.msg.message)
                alert.error(`message: ${error.msg.message.join()}`);
            if (error.msg.non_field_errors)                                     // 'incorrect credential' err prompted from srvr
                alert.error(error.msg.non_field_errors.join());
            if (error.msg.username)
                alert.error(error.msg.username.join());
        }

        // MESSAGES
        if (message !== prevProps.message) {
            if (message.deleteLead)
                alert.success(message.deleteLead);
            if (message.addLead)
                alert.success(message.addLead);
            if (message.passNotMatch)
                alert.error(message.passNotMatch);
        }

    }

    render() { 
        return <Fragment />
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
