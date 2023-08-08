import { SHOW_ADDRESS } from "./Constants";
import { REMOVE_ADDRESS } from "./Constants";

export const initialState = {
    address: "Indore"
}


export const addressReducer = (state = initialState, action) => {
    const {type} = action
    switch (type) {
        case SHOW_ADDRESS:
            return {
                ...state,
                address: "Bhopal",
            }
        default:
            return state
    }
}  