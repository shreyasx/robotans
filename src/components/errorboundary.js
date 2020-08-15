import React, { Component } from 'react';
class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }
    render() {
        if (this.props.hasError) return <h1>Oooops that is bad. Error!</h1>
        return this.props.children;
    }
}
export default ErrorBoundary;