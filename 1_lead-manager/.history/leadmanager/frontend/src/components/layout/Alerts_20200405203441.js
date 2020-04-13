import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connet } from 'react-redux';

export class Alerts extends Component {

    componentDidMount() {
        this.props.alert.show("yoo babby");
    }

    render() { 
        return <Fragment />
    }
}

export default withAlert(Alerts);                               // cls 'Alerts' is the 'component' which is being exported
