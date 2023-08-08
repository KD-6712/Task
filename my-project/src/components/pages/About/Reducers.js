import { SHOW_NAME } from "./Constants";

export const initialState = {
    name: "Kartik"
}

export const aboutReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case SHOW_NAME:
            return{ 
                ...state,
                name: "Kartik"
            }
        default:
            return state
    }
}