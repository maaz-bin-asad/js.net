import React from 'react';
import './Login.css';
const Login = () => {
    return (
        <>
            <div className="cont">

                <div className="form">
                    <form action="User" method="post">
                        <h1 className='heading'>Login</h1>
                        <input className = "user_login" type="text" name="mail" placeholder="Email"></input>
                        <input className= "pass_login" type="password" name="hashpassword" placeholder="Password"></input>
                        <button className="login">Login</button>
                    </form>
                </div>
             </div>
          

</>)}
export default Login;