import { GET_EMAIL } from "./Constants";
import { GET_PASSWORD } from "./Constants";

export const getEmail = (email) => {
    return{
        type: GET_EMAIL,
        payload: email
    }
}

export const getPassword = (password) => {
    return{
        type: GET_PASSWORD,
        payload: password
    }
}