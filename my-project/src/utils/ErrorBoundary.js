import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = { hasError:false};
    }

    componentDidCatch(error, errorInfo){
        // Log the error or send it to an error reporting service.
        console.error(error, errorInfo);
        this.setState({hasError: true});
    }

  render() {
   if(this.state.hasError){
    // Display fallback ui or error message
    return <h1>Something went wrong</h1>;
   }
   return this.props.children;
  }
}
