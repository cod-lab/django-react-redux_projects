import React from 'react';
import { Route, React } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {       
// passed component from 'leadmanager/frontend/src/components/App.js' will be rendered here
// auth is the auth state which will be brought from Redux
// ...rest = for any other prop
    return (
        <div>
            
        </div>
    )
}

export default PrivateRoute;
