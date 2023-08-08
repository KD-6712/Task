import { combineReducers } from 'redux'
import formReducer from "../form/Reducer"
import {userReducer, postReducer} from "../user/Reducers"

const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    form: formReducer
})

export default rootReducer