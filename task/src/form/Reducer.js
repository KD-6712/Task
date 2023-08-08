import { paradux } from "../redux/bootstrap";
import { FETCH_COUNTRY, FETCH_DESCRIPTION, FETCH_EMAIL_ID, FETCH_MOBILE_NO, FETCH_PASSWORD, FETCH_PINCODE, FETCH_USERNAME } from "./Constants";

const initialState = {
    username: '',
    email: '',
    password: '',
    mobileno: '',
    country: '',
    pincode: '',
    description: ''
}

// formReducer function will act as a reducer and will return the updated state.
const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERNAME:
            console.warn("reducer username: ", action.payload) // Eg: output: Kartik
            return {
                ...state,
                username: action.payload
            }
        case FETCH_EMAIL_ID:
            console.warn("reducer email: ", action.payload) // Eg: output: kartikdisawal329@gmail.com
            return {
                ...state,
                email: action.payload
            }
        case FETCH_PASSWORD:
            console.warn("reducer password: ", action.payload) // Eg: output: password
            return {
                ...state,
                password: action.password
            }
        case FETCH_MOBILE_NO:
            console.warn("reducer mobile no: ", action.payload) // Eg: output: 9755184954
            return {
                ...state,
                mobileno: action.payload
            }
        case FETCH_COUNTRY:
            console.warn("reducer country: ", action.payload) // Eg output: India
            return {
                ...state,
                country: action.payload
            }
        case FETCH_PINCODE:
            console.warn("reducer pincode: ", action.payload) // Eg: output: 452018
            return {
                ...state,
                pincode: action.payload
            }
        case FETCH_DESCRIPTION:
            console.warn("reducer description: ", action.payload) // Eg: About yourself.
            return {
                ...state,
                description: action.payload
            }
        default:
            return state
    }
}

export default formReducer