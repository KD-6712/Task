import { combineReducers } from 'redux'
// import { loadingReducer } from '../components/common/Loader/reducers'
import { globalReducer } from '../components/common/redux/Reducers'
import {userReducer} from '../components/user/reducers'
import { aboutReducer } from '../components/pages/About/Reducers'
import { addressReducer } from '../components/pages/Address/Reducers'
import { ageReducer } from '../components/pages/Home/Reducers'
import { formReducer } from '../components/pages/Form/Reducers'
import removeReducer from '../utils/global_state_remover/Reducers'
import reduceReducers from 'reduce-reducers'
/**
 * @param {Object} - key/value of reducer functions
 */
// const load = loadingReducer
// const about = aboutReducer
// export const createReducer = (asyncReducers) => combineReducers(
//     {
//         load: loadingReducer,
//         about: aboutReducer,
//         ...asyncReducers,
//     }
// ) 
const combinedReducers = combineReducers({
    global: globalReducer,
    user: userReducer, 
    about: aboutReducer,
    address: addressReducer,
    age: ageReducer,
    form: formReducer,
})

const rootReducer = reduceReducers(combinedReducers, removeReducer)

// export default createReducer;
export default rootReducer