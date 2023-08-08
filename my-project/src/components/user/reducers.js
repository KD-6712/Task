import {FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS} from './Constants'

const initialState = {
    users: [],
    error: ''
}

export const userReducer = (state=initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                users: payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                users: [],
                error: payload
            }
        default:
            return state
    }
}

