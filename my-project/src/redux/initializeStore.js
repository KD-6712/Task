import { legacy_createStore,  applyMiddleware} from "redux";
import createReducer from "./rootReducer";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
const initializeStore = () => {
  const store = legacy_createStore(createReducer(),  composeWithDevTools(applyMiddleware(thunk)));
  
  store.asyncReducers = {};
  store.injectReducer = (key, reducer) => {
  store.asyncReducers[key] = reducer;
  console.log("Store: ", store.getState())
  store.replaceReducer(createReducer(store.asyncReducers));
    return store;
  };

  return store;
};

export default initializeStore;