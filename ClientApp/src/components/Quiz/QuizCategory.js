/*import React, { Component } from 'react';

import { Link } from 'react-router-dom';


const QuizCategory = () => {

    return (
        <>
            <input type="checkbox" id="check"/>
                <label for="check">
                <i class="fas fa-times" id="btn"></i>
                <i class="fas fa-bars" id="cancel"></i>
                </label>
                <div class="sidebar">
                    <header>Menu</header>
                <Link tag={Link} to="/userpage/quiz/frontend">
                        <i class="fas fa-qrcode"></i>
                   <span>Front End</span>
                </Link>
                <Link tag={Link} to={"/userpage/quiz/" + domain}>
                        <i class="fas fa-link"></i>
                        <span>Back End</span>
                </Link>
                <Link tag={Link} to="/userpage/quiz/visual">
                        <i class="fas fa-stream"></i>
                        <span>Visual</span>
                </Link>
                   
                </div>
                
        </>)
};
export default QuizCategory;*/

import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
const QuizCategory = () => {

    const [data, setData] = useState([]);

    useEffect(async () => {

        await Axios.get("Test")
            .then(result => setData(result.data));
        console.log(data);
       
    }, []);
    return (
        <>
            <input type="checkbox" id="check" />
            <label for="check">
                <i class="fas fa-times" id="btn"></i>
                <i class="fas fa-bars" id="cancel"></i>
            </label>
            <div class="sidebar">
                <header>Menu</header>
                {data.map((val) =>
                    <Link tag={Link} to={"/userpage/quiz/" + val}>
                        <i class="fas fa-qrcode"></i>
                        <span>{val}</span>
                    </Link>

                )}
            </div>
        </>
    );
}
 export default QuizCategory;

/*
export class QuizCategory extends Component {
static displayName = QuizCategory.name;

constructor(props) {
    super(props);
    this.state = { TestCategories: [], loading: true };
}

componentDidMount() {
    this.populateData();
}

    static renderTable(TestCategories) {
        return (
        <>
        <input type="checkbox" id="check"/>
                <label for="check">
                <i class="fas fa-times" id="btn"></i>
                <i class="fas fa-bars" id="cancel"></i>
                </label>
                <div class="sidebar">
                    <header>Menu</header>
                    {TestCategories.map((val) =>
                        <Link tag={Link} to={"/userpage/quiz/" + val}>
                        <i class="fas fa-qrcode"></i>
                        <span>{val}</span>
                </Link>
               
                   )}
                </div>
                </>
    );
}

render() {
    let contents = this.state.loading
        ? <p><em>Loading..</em></p>
        : QuizCategory.renderTable(this.state.TestCategories);

    return (
        <div>
            
           {contents}
        </div>
    );
}

async populateData() {
      
const response = await fetch('Test');
const data = await response.json();
    console.log(data)
    this.setState({ TestCategories: data, loading: false });
}
}*/