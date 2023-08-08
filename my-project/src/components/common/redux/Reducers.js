import { SET_LOADING, UNSET_LOADING } from './Constants'
import { SHOW_SNACKBAR, UNSHOW_SNACKBAR } from './Constants'
export const initialState = {
    isLoading: false,
    snackbarShown: false
}

export const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case UNSET_LOADING:
            return {
                ...state,
                isLoading: false
            }
        case SHOW_SNACKBAR:
            return {
                ...state,
                snackbarShown: true
            }
        case UNSHOW_SNACKBAR:
            return {
                ...state,
                snackbarShown: false
            }
        default:
            return state
    }
} 