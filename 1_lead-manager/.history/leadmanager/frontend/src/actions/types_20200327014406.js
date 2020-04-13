export const GET_LEADS = "GET_LEADS";       // it just a place to hold all of our types for an organization

const initialState = {
    // something: 'asdasd',
    leads: []
};

export default funtion(state = initialState, action) {
    switch (action.type) {
        case GET_LEADS:
            return {
                ...state,                   // it includes whatever in the initialState apart from leads, currently there is nothing except leads
                leads: action.payload
            }
        default:
            return state;
    }
}
