import React from "react";
import "./UserTestProfile.css";
import { useSelector } from 'react-redux';
import { selectUser } from "../../feature/userSlice";
const UserTestProfile = () => {

 const user = useSelector(selectUser)
    return(
        <>
    <div className="profile_wrap">

                <div className="avatar">
                    <img src="https://source.unsplash.com/E3NUmCScugo/300x300" />
                </div>
                <div className="detail_wrap">
                    <h3 className="alert alert-info">{user.name}</h3>
                    <h4 className="alert alert-info">{ user.email}</h4>
                   
                </div>
            </div>
    </>
    )
}

export default UserTestProfile;
/*
import React, { Component } from 'react';
import "./UserTestProfile.css";

export class UserTestProfile extends Component {
    static displayName = UserTestProfile.name;



    constructor(props) {
        super(props);
        this.state = {
            User: {}, loading: true };
    }
    *//*let history = useHistory();
const handleRoute = () => {
    history.push("/maincourse");
}*//*
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
                    <h3 className="alert alert-info">{user.name}</h3>
                    <h4 className="alert alert-info">{ user.email}</h4>
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
}*/