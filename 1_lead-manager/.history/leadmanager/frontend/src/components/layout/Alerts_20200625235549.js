import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {

    static propTypes = { 
        error: PropTypes.object.isRequired,
        // creating 'prop' 'error'
        // getting 'error' from variable 'MapStateToProps' (written below) and converting to 'props'
        message: PropTypes.object.isRequired
        // creating 'prop' 'message'
        // getting 'msg' from variable 'MapStateToProps' (written below) and converting to 'props'
    };

    componentDidUpdate(prevProps) {

        const { error, alert, message } = this.props;

        // ERRORS
        if (error !== prevProps.error) {
            if (error.msg.name) // if name err prompted from srvr
                alert.error(`name: ${error.msg.name.join()}`);
                // (`name: ${error.msg.name.join()}`) = gives us the err(in array) that sever has generated, not the one we hv defined for any prob
                // ${} = this makes/add variable while printing
                // .join() = convert array to string
            if (error.msg.email) // if email err prompted from srvr
                alert.error(`email: ${error.msg.email.join()}`);
                // (`email: ${error.msg.email.join()}`) = gives us the err(in array) that sever has generated, not the one we hv defined for any prob
                // ${} = this makes/add variable while printing
                // .join() = convert array to string
            if (error.msg.message) // if message err prompted from srvr
                alert.error(`message: ${error.msg.message.join()}`);
                // (`message: ${error.msg.message.join()}`) = gives us the err(in array) that sever has generated, not the one we hv defined for any prob
                // ${} = this makes/add variable while printing
                // .join() = convert array to string
            if (error.msg.non_field_errors) // if err prompted from srvr
                alert.error(error.msg.non_field_errors.join());
                // (error.msg.non_field_errors.join()) = gives us the err(in array) that sever has generated, not the one we hv defined for any prob
                // .join() = convert array to string
                // this err is prompted at the time of login if 'incorrect credentials'
            if (error.msg.username) // if err prompted from srvr
                alert.error(error.msg.username.join());
                // (error.msg.username.join()) = gives us the err(in array) that sever has generated, not the one we hv defined for any prob
                // .join() = convert array to string
                // this err is prompted at the time of registration if 'user already exists'
        }

        // MESSAGES
        if (message !== prevProps.message) {
            if (message.deleteLead)
                alert.success(message.deleteLead);
                // it will display the value(string)(msg) of property 'deleteLead' created in 'action'(leadmanager/frontend/src/actions/leads.js)
                // it'll catch and display msg for event occured in 'action'(leadmanager/frontend/src/actions/leads.js)
            if (message.addLead)
                alert.success(message.addLead);
                // it will display the value(string)(msg) of property 'addLead' created in 'action'(leadmanager/frontend/src/actions/leads.js)
                // it'll catch and display msg for event occured in 'action'(leadmanager/frontend/src/actions/leads.js)
            if (message.passNotMatch)
                alert.error(message.passNotMatch);
                // it will display the value(string)(msg) of property 'passNotMatch' created in 'component'(leadmanager/frontend/src/components/accounts/Register.js)
                // it'll catch and display msg for event occured in 'component'(leadmanager/frontend/src/components/accounts/Register.js)
        }

    }

    render() { 
        return <Fragment />
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    // error = prop created above
    // state.errors = reducer imported from 'leadmanger/frontend/src/reducers/index.js'
    message: state.messages
    // message = prop created above
    // state.messages = reducer imported from 'leadmanger/frontend/src/reducers/index.js'
});

export default connect(mapStateToProps)(withAlert()(Alerts));
// sending alerts('error','message') to 'action'(leadmanager/frontend/src/actions/messages.js)
// cls 'Alerts' is the 'component' which is being exported from here
// 'mapStateToProps' is giving the 'states' from 'leadmanger/frontend/src/reducers/index.js'
