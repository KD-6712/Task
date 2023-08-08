import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./Constants"

export const initialState = {
    loading: true,
    users: [],
    error: ''
}

const initState2 ={
    loading: true,
    posts: [],
    error: ''
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state, 
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                loading: false,
                users: [],
                error: action.payload

            }
        default: return state
    }
}

export const postReducer = (state = initState2, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state, 
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                loading: false,
                posts: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                loading: false,
                posts: [],
                error: action.payload

            }
        default: return state
    }
}



