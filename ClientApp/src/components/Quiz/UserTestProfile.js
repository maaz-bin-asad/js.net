/*import React from "react";
import "./UserTestProfile.css";
const UserTestProfile = () => {
    return(
        <>
    <div className="main_wrap">
                <div className="profile_wrap">
                    
                            <div className="avatar">
                                <img src="https://images.unsplash.com/photo-1595085610978-b5e35eb24dcf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"/>                      
                            </div>
                            <div className="detail_wrap">
                                    <h3 className="name">Christina </h3>
                                    <h4 className="occupation">Web designer</h4>
                                    <p className="location">Rating : 5</p>
                    </div>
                </div>
                           { <div className="rating_wrap">
                                <div className="rating">
                                    <h3>Rating:5</h3>
                        </div>

                    </div>}
                
           
    </div>
    </>
    )
}

export default UserTestProfile;*/

import React, { Component } from 'react';
import "./UserTestProfile.css";

export class UserTestProfile extends Component {
    static displayName = UserTestProfile.name;



    constructor(props) {
        super(props);
        this.state = {
            User: {}, loading: true };
    }
    /*let history = useHistory();
const handleRoute = () => {
    history.push("/maincourse");
}*/
    componentDidMount() {
        this.populateData();
    }

    static renderDiv(User) {
        return (<>
            <div className="profile_wrap">

                <div className="avatar">
                    <img src="https://source.unsplash.com/E3NUmCScugo/300x300" />
                </div>
                <div className="detail_wrap">
                    <h3 className="alert alert-info">{User.username}</h3>
                    <h4 className="alert alert-info">{ User.mail}</h4>
                    <p className="alert alert-info">Rating : { User.rating}</p>
                </div>
            </div>
            


        

        </>);
    }

    render() {

        let contents = this.state.loading
            ? <p><em>Loading..</em></p>
            : UserTestProfile.renderDiv(this.state.User);


        return (

            <div >

              
                {contents}


            </div>
        );
    }

    async populateData() {

        const response = await fetch("User/getUser?username=maazbinasad");


        const data = await response.json();
        console.log(data)
        this.setState({ User: data, loading: false });
    }
}