import { fetchEmail } from "./formAction";
import { FETCH_EMAIL_ID, FETCH_PASSWORD, FETCH_USERNAME } from "./formType";

const initialState = {
    username: '',
    email: ''
}

const formReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERNAME:
            console.warn("reducer username: ", action.payload)
            return{
                ...state,
                username: action.payload
            }
        case FETCH_EMAIL_ID:
            console.warn("reducer email: ", action.payload)
            return{
                ...state,
                email: action.payload
            }
        case FETCH_PASSWORD:
            console.warn("reducer password: ", action.payload)
            return{
                ...state,
                password: action.password
            }
        default: 
        return state
    }
}

export default formReducer