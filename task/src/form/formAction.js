import {FETCH_EMAIL_ID, FETCH_PASSWORD, FETCH_USERNAME} from './formType'

export const fetchUsername = (username) => {
    console.warn("action username: ", username)
    return {
        type: FETCH_USERNAME,
        payload: username
    }
}

export const fetchEmail = (email) => {
    console.warn("action email: ", email)
    return {
        type: FETCH_EMAIL_ID,
        payload: email
    }
}

export const fetchPassword = (password) => {
    console.warn("action password: ", password)
    return {
        type: FETCH_PASSWORD,
        payload: password
    }
}
