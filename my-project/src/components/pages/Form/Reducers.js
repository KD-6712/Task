import { GET_EMAIL, GET_PASSWORD } from "./Constants";

export const initialState = {
    email : null,
    password : null
}

export const formReducer = (state=initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case GET_EMAIL:
            return{
                ...state,
                email: payload
            }
        
        case GET_PASSWORD:
            return{
                ...state, 
                password: payload
            }
    
        default:
            return null
    }
} 