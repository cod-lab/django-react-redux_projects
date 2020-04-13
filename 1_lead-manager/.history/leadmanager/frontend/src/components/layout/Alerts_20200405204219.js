import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {

    componentDidMount() {
        this.props.alert.show("yoo babby");
    }

    render() { 
        return <Fragment />
    }
}

const mapStateToProps = state => ({ error: state.errors});

export default withAlert(Alerts);                               // cls 'Alerts' is the 'component' which is being exported
