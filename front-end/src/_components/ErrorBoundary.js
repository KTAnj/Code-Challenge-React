import React, { Component } from 'react';
import ErrorTag from './ErrorTag';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError = error => {
        return { hasError: true };
      };

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
          error
        })
        // Log the error, we can use any sevice to track error
        console.log(errorInfo);
    }

    render () {  
        if (this.state.hasError) {
            return <ErrorTag></ErrorTag>;
        } else {
            return this.props.children;
        }        
    }
}