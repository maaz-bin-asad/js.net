import React from 'react';
import "./category.css";
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
                <Link tag={Link} to="/userpage/quiz/backend">
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
export default QuizCategory;