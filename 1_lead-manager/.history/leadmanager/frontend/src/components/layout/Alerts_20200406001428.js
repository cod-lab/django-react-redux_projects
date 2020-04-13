import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {

    static propTypes = { errors: PropTypes.object.isRequired };                                  // creating a 'prop' 'leads'

    componentDidMount() {
        this.props.alert.show("yoo babby");
    }

    render() { 
        return <Fragment />
    }
}

const mapStateToProps = state => ({ error: state.errors });
// error = prop created above
// state.errors = reducer imported from 'leadmanger/frontend/src/reducers/index.js'

export default connect(mapStateToProps)(withAlert(Alerts));                               // cls 'Alerts' is the 'component' which is being exported
