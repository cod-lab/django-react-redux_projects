import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';                      // it is used to check the auth state, we need to check if the user is authenticated or not
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
// passed component from 'leadmanager/frontend/src/components/App.js' will be rendered here
// auth is the auth state which will be brought from Redux
// ...rest = for any other prop
    <Route
        {...rest}
        render = { props => {
            if (auth.isLoading)
                return <h2>Loading...</h2>;          // when loading...display this, it's basically between firing the event and getting the response from the sent request
            else if (!auth.isAuthenticated)
                return <Redirect to='/login' />;            // if user not logged-in then redirect to login pg
            else
                return <Component {...props} />;
        }}
    />
);

const mapStateToProps = state => ({ auth: state.auth })
// this will map state to props of this component
// this will get state from 'leadmanger/frontend/src/reducers/auth.js'
    // 'auth:' = 'prop' = declared above, all 'states' mapped into this 'prop'
// 'state.auth' = 'state' = it is the auth reducer imported from 'leadmanger/frontend/src/reducers/index.js'

export default connect(mapStateToProps)(PrivateRoute);
// sending      to 'action'(leadmanager/frontend/src/actions/auth.js) to
// variable 'PrivateRoute' is a'component' here wrapped thru 'connect' using '()'

// sending 'props' 'getLeads', 'deleteLead' to 'action'(leadmanager/frontend/src/actions/leads.js) to delete 'lead' from server(django) too
// 'mapStateToProps' is giving the 'states' from 'leadmanger/frontend/src/reducers/index.js'
// 'getLeads' & 'deleteLead' are 'props' here, created above

// sending alerts('error','message') to 'action'(leadmanager/frontend/src/actions/messages.js)
// cls 'Alerts' is the 'component' which is being exported
// 'mapStateToProps' is giving the 'states' from 'leadmanger/frontend/src/reducers/index.js'