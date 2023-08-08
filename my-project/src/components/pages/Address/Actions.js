import { SHOW_ADDRESS } from "./Constants";
import { REMOVE_ADDRESS } from "./Constants";

export const showAddress = () => {
    return {
        type: SHOW_ADDRESS,
    }
}

export const removeAddress = () => {
    return {
        type: REMOVE_ADDRESS,
    }
}