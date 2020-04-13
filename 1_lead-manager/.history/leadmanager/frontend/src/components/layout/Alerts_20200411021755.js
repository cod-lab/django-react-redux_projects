import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {

    static propTypes = { 
        error: PropTypes.object.isRequired,                             // creating 'prop' 'error'
        message: PropTypes.object.isRequired                            // creating 'prop' 'message'
    };
    
    componentDidUpdate(prevProps) {

        const { error, alert, message } = this.props;

        // ERRORS
        if (error !== prevProps.error) {
            if (error.msg.name)
                alert.error(`name: ${error.msg.name.join()}`);
                // (`name: ${error.msg.name.join()}`) = gives us the err(in array) that sever has generated, not the one we hv defined for any prob
                // ${} = this makes/add variable while printing
                // .join() = convert array to string
            if (error.msg.email)
                alert.error(`email: ${error.msg.email.join()}`);
                // (`email: ${error.msg.email.join()}`) = gives us the err(in array) that sever has generated, not the one we hv defined for any prob
                // ${} = this makes/add variable while printing
                // .join() = convert array to string
            if (error.msg.message)
                alert.error(`message: ${error.msg.message.join()}`);
                // (`message: ${error.msg.message.join()}`) = gives us the err(in array) that sever has generated, not the one we hv defined for any prob
                // ${} = this makes/add variable while printing
                // .join() = convert array to string
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

export default connect(mapStateToProps)(Alerts);
// cls 'Alerts' is the 'component' which is being exported
// 