import Paradux from 'paradux'
import rootReducer from './RootReducer'; //import any reducers you always want present

export const paradux = new Paradux(rootReducer);