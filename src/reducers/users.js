import { GET_USERS_LIST, SET_USER_DETAILS } from "../actions/userAction";

let initialState = {
    usersList: false,
    errorUsersList: false,
    userDetails: false,
    title: "React Redux Table",
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_LIST:
            return {
                ...state,
                usersList: action.payload.data,
                errorUsersList: action.payload.errorMessage,
            };
        case SET_USER_DETAILS:
            return {
                ...state,
                userDetails: action.payload,
            };
        default:
            return state;
    }
};

export default users;
