import React from 'react';
const Signup = () => {
    return (
        <><div>
            <h1>Hello, Learner!</h1>
            <p>Welcome to Perspectify</p>

            <form action="User/signup" method="post">
                <input type="text" name="username" placeholder="Username"></input>
                <input type="text" name="mail" placeholder="Email"></input>
                <input type="password" name="hashpassword" placeholder="Password"></input>
                <input type="submit" value="Register"></input>
            </form>
        </div></>
    )
}
export default Signup;