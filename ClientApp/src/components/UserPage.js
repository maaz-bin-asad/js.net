import React from 'react';

import Card from './Card'
import "./Card.css";
const UserPage = () => {
    var name = localStorage.getItem("Name");
    if (name == "") {
        return (
            <>{window.location.href = "/"}</>
        )
    }
    else {
        return (
            <><div className="User_heading">
                <h2>Hello {name}, Welcome</h2>
            </div>
               <Card/>
            </>)
    }
}
export default UserPage;

