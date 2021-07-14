import React from 'react'
import { Redirect } from 'react-router-dom'
import { Login } from './AuthPage/Login';
export class ProtectedRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Value: false, loading: true };
    }
    componentDidMount() {
        this.dataAuth();
    }
     renderTable(Value) {

         const Component = this.props.component;

        console.log(typeof (Value))
        console.log(Value)
         return Value ? (<Component />) : <Redirect to={{ pathname: '/auth/login' }} />;
    }
    render() {
        
        let contents = this.state.loading
            ? <p><em>Loading..</em></p>
            : this.renderTable(this.state.Value );

        return (
            <div>

                {contents}
            </div>
        );
       
        
    }

    async dataAuth() {
        const isAuthenticated = await fetch("User/checkAuth");
        const data = await isAuthenticated.json();
        console.log(data)
        this.setState({ Value: data, loading: false});

    }
}
