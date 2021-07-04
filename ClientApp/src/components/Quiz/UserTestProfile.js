import React from "react";
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
                                    <p className="location"><i className="fa fa-map-marker"></i>US</p>
                    </div>
                </div>
                           {/* <div className="rating_wrap">
                                <div className="rating">
                                    <h3>Rating:5</h3>
                        </div>

                    </div>*/}
                
           
    </div>
    </>
    )
}

export default UserTestProfile;
