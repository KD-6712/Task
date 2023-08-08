import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./Constants"
import axios from 'axios'

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// important this async action creator it is not pure. It returns a function rather than an action.
// The function fetches the data asynchronously.

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(fetchUsersSuccess(users))
         })
         .catch(error => {
            const errorMsg = error.message
            dispatch(fetchUsersFailure(errorMsg))
         })
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data
            dispatch(fetchUsersSuccess(posts))
        })
        .catch(error => {
            const errorMsg2 = error.message
            dispatch(fetchUsersFailure(errorMsg2))
        })

    }
}