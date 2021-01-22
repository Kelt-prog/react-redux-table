import axios from 'axios';

export const GET_USERS_LIST = 'GET_USERS_LIST';
export const SET_USER_DETAILS = 'SET_USER_DETAILS';

const endpoint = 'http://www.filltext.com/?rows=100&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}';

export const getUsersList = () => {
    return (dispatch) => {
        axios
            .get(endpoint)
            .then((response) => {
                const uniqueData = [
                    ...response.data
                        .reduce((a, c) => {
                            a.set(c.id, c);
                            return a;
                        }, new Map())
                        .values(),
                ];

                dispatch({
                    type: GET_USERS_LIST,
                    payload: {
                        data: uniqueData,
                        errorMessage: false,
                    },
                });
            })
            .catch(function (error) {
                dispatch({
                    type: GET_USERS_LIST,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const setUserDetails = (userDetails) => {
    return {
        type: SET_USER_DETAILS,
        payload: userDetails,
    };
};
