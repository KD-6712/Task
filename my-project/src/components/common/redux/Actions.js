import { SET_LOADING } from "./Constants"
import { UNSET_LOADING } from "./Constants"
import { SHOW_SNACKBAR, UNSHOW_SNACKBAR } from "./Constants"
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

export const unsetLoading = () => {
    return {
        type: UNSET_LOADING
    }
} 

export const showSnackbar = () => {
    return {
        type: SHOW_SNACKBAR
    }
} 


export const unshowSnackbar = () => {
    return {
        type: UNSHOW_SNACKBAR
    }
} 
