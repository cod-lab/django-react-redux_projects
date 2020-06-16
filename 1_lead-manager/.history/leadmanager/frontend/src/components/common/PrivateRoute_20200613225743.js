import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';                  // it is used to check the auth state, we need to check if the user is authenticated or not
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
// passed component from 'leadmanager/frontend/src/components/App.js' will be rendered here
// auth is the auth state which will be brought from Redux
// ...rest = for any other prop
    return (
        <div>
            
        </div>
    )
);

const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps)(PrivateRoute);
