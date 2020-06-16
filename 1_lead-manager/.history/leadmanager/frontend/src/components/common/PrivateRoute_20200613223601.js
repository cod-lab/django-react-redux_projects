import React from 'react'

const PrivateRoute = ({ component: Componen, auth, ...rest }) => {       
// passed component from 'leadmanager/frontend/src/components/App.js' will be rendered here
// auth is the auth state which will be brought from Redux
// ...rest = for any other prop
    return (
        <div>
            
        </div>
    )
}

export default PrivateRoute;
