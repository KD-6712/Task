import React from "react";
import { object } from "prop-types";
import { useStore } from "react-redux";
const withReducer = (key, reducer) => WrappedComponent => {
  const Extended = (props, context) => {
    const store = useStore()
    //context.store.injectReducer(key, reducer);
    return <WrappedComponent {...props} />
  };

  Extended.contextTypes = {
    store: object
  };

  return Extended;
};

export { withReducer };