import {legacy_createStore, applyMiddleware} from 'redux'
import rootReducer from './RootReducer'
import thunk from 'redux-thunk'
import { paradux } from './bootstrap'
const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
<<<<<<< HEAD
console.warn("store data", store) // output: {store}
export default store 
=======

export default store
>>>>>>> sprint1
