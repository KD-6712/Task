import {legacy_createStore, applyMiddleware} from 'redux'
//import { combineReducers } from 'redux'
import rootReducer from '../user/UserReducer'
import thunk from 'redux-thunk'


const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export default store