import { REMOVE_STATE } from "./Constants";

export const removeStateAction = (initState, stateToBeReset) => {
    return {
        type: REMOVE_STATE,
        payload: initState,
        stateToBeReset: stateToBeReset
    }
}


