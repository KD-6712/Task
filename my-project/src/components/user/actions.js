import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from './Constants'



export const fetchUsersSuccess= (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure= (err) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: err
    }
}


