import React, { Component } from 'react';
import './Home.css';

const Home = () => {
    return (<>
        <div className="home">
            <div className="text-box" >
                <h1>Start Your Journey</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <a href="/counter" className="btn1">GET Started</a>
            </div>
        </div>
       
    </>
        )
}
export default Home;