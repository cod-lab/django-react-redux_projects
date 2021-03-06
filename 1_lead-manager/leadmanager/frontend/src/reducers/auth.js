import { USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types.js';

const initialState = {
    token: localStorage.getItem('token'),                       // the token will be stored in local storage
    isAuthenticated: null,                                      // once user login or user is loaded, it'll turn to true and token will be stored in local storage
    isLoading: false,
    // when it'll fire off we're gonna hv 'action' 'isLoading' which will fire off in between trying to load the user and actually (load the user) making the request and getting the response back and then it'll change back to false
    user: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {                                            // send everything below to 'component'(leadmanager/frontend/src/components/common/PrivateRoute.js)
                ...state,                                       // it includes all the data of variable 'initialState'
                isLoading: true                                 // it will be true until request is dn or response is sent, after that it beacomes false
            };
        case USER_LOADED:
            return {                                            // send everything below to 'component'(leadmanager/frontend/src/components/common/PrivateRoute.js)
                ...state,                                       // it includes all the data of variable 'initialState'
                isAuthenticated: true,                          // it means that we made a successful request to 'api' of the user with the token
                isLoading: false,                               // it becomes false once the request is dn or response is sent
                user: action.payload                            // receive user as 'payload' from 'action'(leadmanager/frontend/src/actions/auth.js)
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:                                  // register-success will also do the same as login-success
            localStorage.setItem('token',action.payload.token);      // add token from local storage if there's one
            return {
                ...state,                                       // it includes all the data of variable 'initialState'
                ...action.payload,                              // returning whole payload
                isAuthenticated: true,                          // it means that we made a successful request to 'api' for login and now logged-in
                isLoading: false                                // it becomes false once the request is dn or response is sent
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:                                        // login-fail will do same as auth-err case
        case LOGOUT_SUCCESS:                                    // logout will also do the same here
        case REGISTER_FAIL:                                     // register-fail will do same here
            localStorage.removeItem('token');                   // remove any token from local storage if there's one
            return {                                            // send everything below to 'component'(leadmanager/frontend/src/components/common/PrivateRoute.js)
                ...state,                                       // it includes all the data of variable 'initialState'
                /* setting everything back to default */
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };
        default:
            return state;
    }
}
