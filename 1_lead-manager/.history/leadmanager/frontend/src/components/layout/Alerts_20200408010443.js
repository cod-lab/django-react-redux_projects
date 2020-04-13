import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {

    static propTypes = { error: PropTypes.object.isRequired };                              // creating 'prop' 'error'
    
    componentDidUpdate(prevProps) {
        const { error, alert } = this.props;
        if (error !== prevProps.error) {
            if (error.msg.name)
                alert.error(`Name: ${error.msg.name.join()}`);
                // ${} = this makes/add variable while printing
                // .join() = convert array to string
            if (error.msg.email)
                alert.error(`Email: ${error.msg.email.join()}`);
        }
    }

    render() { 
        return <Fragment />
    }
}

const mapStateToProps = state => ({ error: state.errors });
// error = prop created above
// state.errors = reducer imported from 'leadmanger/frontend/src/reducers/index.js'

export default connect(mapStateToProps)(withAlert()(Alerts));                                 // cls 'Alerts' is the 'component' which is being exported
