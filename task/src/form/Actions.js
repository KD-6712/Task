import { FETCH_COUNTRY, FETCH_DESCRIPTION, FETCH_EMAIL_ID, FETCH_MOBILE_NO, FETCH_PASSWORD, FETCH_PINCODE, FETCH_USERNAME } from './Constants'

// All the functions in this file are action creator functions.

export const fetchUsername = (username) => {
    console.warn("action username: ", username) // Eg: output: Kartik
    return {
        type: FETCH_USERNAME,
        payload: username
    }
}

export const fetchEmail = (email) => {
    console.warn("action email: ", email) // Eg: output: kartikdisawal329@gmail.com
    return {
        type: FETCH_EMAIL_ID,
        payload: email
    }
}

export const fetchPassword = (password) => {
    console.warn("action password: ", password) // Eg: output: password
    return {
        type: FETCH_PASSWORD,
        payload: password
    }
}

export const fetchMobileno = (mobileno) => {
    console.warn("action mobile no: ", mobileno) // Eg: output: 9755184954
    return {
        type: FETCH_MOBILE_NO,
        payload: mobileno
    }
}

export const fetchCountry = (country) => {
    console.warn("action country: ", country) // Eg: output: India
    return {
        type: FETCH_COUNTRY,
        payload: country
    }
}

export const fetchPincode = (pincode) => {
    console.warn("action Pincode : ", pincode) // Eg: output: 452018
    return {
        type: FETCH_PINCODE,
        payload: pincode
    }
}

export const fetchDescription = (description) => {
    console.warn("action Description: ", description) // Eg: output: About yourself.
    return {
        type: FETCH_DESCRIPTION,
        payload: description
    }
}
