import React from 'react'
import { Redirect } from 'react-router-dom'

export class  ProtectedRoute extends React.Component {
    async dataAuth(){
    const isAuthenticated = await fetch("User/checkAuth");
    const data = await isAuthenticated.json();
        return data;
}
     render() {
        const Component = this.props.component;
        var data = this.dataAuth()
        console.log(data)

         return PromiseResult ? (
            <Component/>
        ) : (
            <Redirect to={{ pathname: '/auth/login' }} />
        );
    }
}


