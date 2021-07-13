import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (<>
        <div className="home">
            <div className="text-box" >
                <h1>Start Your Journey</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <Link tag={Link} className="btn1" to="/auth/signup">Get started</Link>
            </div>
            {/*<div>
                <h1>Hello, Learner!</h1>
                <p>Welcome to Perspectify</p>

                <form action="User" method="post">
                    <input type="text" name="mail" placeholder="Email"></input>
                    <input type="password" name="hashpassword" placeholder="Password"></input>
                    <input type="submit" value="Login"></input>
                </form>
            </div>*/}
        </div>
       
    </>
        )

}
export default Home;