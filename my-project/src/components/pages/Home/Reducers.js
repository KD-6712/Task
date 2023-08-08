 import { SHOW_AGE } from "./Constants";

export const initialState = {
    age: 0
}
 export const ageReducer = (state=initialState, action) => {
    const {type} = action
    switch (type) {
        case SHOW_AGE:
            return {
                ...state,
                age: 20,
            }
        default:
            return state
    }
 } 