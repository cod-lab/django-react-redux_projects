import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';

export class Alerts extends Component {

componentDidMount() {
    this.props.alert.show("yoo babby");
}

    render() { 
        return (<Fragment />);
    }   
}

export default withAlert(Alerts);
