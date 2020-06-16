const initilState {
    token: localStorge.getItem('token'),                            // the token will be stored in local storage
    isAuthenticated: null,                                          // once user login or user is loaded, it'll turn to true and token will be stored in local storage
    isLoading: false,                                               
    // when it'll fire off we're gonna hv 'action' 'isLoading' which will fire off in between trying to load the user and actually (load the user) making the request and getting the response back and then it'll change back to false
    user: null
}

export default function(state = initialState, action) {
    switch (action.type) {
    //     case GET_ERRORS:
    //         return {                                            // send everything below to 'component'(leadmanager/frontend/src/components/layout/Alerts.js)
    //             msg: action.payload.msg,                        // receive msg as 'payload' from 'action'(leadmanager/frontend/src/actions/messages.js)
    //             status: action.payload.status                   // receive status as 'payload' from 'action'(leadmanager/frontend/src/actions/messages.js)
    //         };
        default:
            return state;
    }
}
