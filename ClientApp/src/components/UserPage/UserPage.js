import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser} from "../../feature/userSlice";
import Card from './Card'
import "./Card.css";
const UserPage = () => {
    const user = useSelector(selectUser)
    if (user) {
        
        return (
            <><div className="User_heading">
                <h2>Hello {user.name}, Welcome</h2>
            </div>
                <Card />
            </>)
    }
    else {
        return(<h1>try again</h1>)
    }
    
    /*var name = localStorage.getItem("Name");
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
    }*/
}
export default UserPage;

