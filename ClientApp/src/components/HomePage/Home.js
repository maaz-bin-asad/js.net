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
        </div>
       
    </>
        )

}
export default Home;
