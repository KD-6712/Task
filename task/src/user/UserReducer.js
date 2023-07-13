import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./UserType"
import { combineReducers } from 'redux'
import formReducer from "../form/formReducer"
const initialState = {
    loading: false,
    users: [],
    error: ''
}

const initState2 ={
    loading: false,
    posts: [],
    error: ''
}

const userReducer = (state = initialState, action) => {
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

const postReducer = (state = initState2, action) => {
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

const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    form: formReducer
})

export default rootReducer

