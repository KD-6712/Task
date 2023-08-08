import { REMOVE_STATE } from "./Constants";

/*
    this is in store:
    eg: {address: {address: 'Indore'}}

    payload: {address: 'Indore'}

    stateToBeReset: "address"
    we want to fetch the address in state to reset to initial value.
*/



const removeReducer = (state, action) => {
    const { type, payload, stateToBeReset } = action
    const resetState = { ...state }
    resetState[stateToBeReset] = payload
    switch (type) {
        case REMOVE_STATE:
            return resetState
        default:
            return state
    }
}

export default removeReducer
