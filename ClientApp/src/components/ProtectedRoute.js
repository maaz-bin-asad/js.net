import React from 'react'
import { Redirect } from 'react-router-dom'

export class ProtectedRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Value: "" };
    }
    componentDidMount() {
        this.dataAuth();
    }
    render() {

        const Component = this.props.component;

        console.log(this.state.Value)
        return this.state.Value ? (<Component />) : (<Redirect to={{ pathname: '/auth/login' }} />
        );
    }

    async dataAuth() {
        const isAuthenticated = await fetch("User/checkAuth");
        const data = await isAuthenticated.json();
        this.setState({ Value: data });

    }
}