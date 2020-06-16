const initilState {
    token: localStorge.getItem('token'),                           // the token is stored in local storage
    isAuthenticated: null,                                         // once user login or user is loaded, it'll turn to true and token will be stored in local storage
    isLoading: false,
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
