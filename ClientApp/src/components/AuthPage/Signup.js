import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
		<><div className="container1">
			<div className="d-flex justify-content-center h-100">
				<div className="card">
					<div className="card-header">
						<h3>Sign Up</h3>
						<div className="d-flex justify-content-end social_icon">
							<span><i className="fab fa-facebook-square"></i></span>
							<span><i className="fab fa-google-plus-square"></i></span>
							<span><i className="fab fa-twitter-square"></i></span>
						</div>
					</div>
					<div className="card-body">
						<form action="User/signup" method="post">
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text"><i className="fas fa-user"></i></span>
								</div>
								<input type="text" name="username" className="form-control" placeholder="Username" />

							</div>
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text"><i class="fas fa-envelope"></i></span>
								</div>
								<input type="text" name="mail" className="form-control" placeholder="Email"/>

							</div>
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text"><i class="fas fa-key"></i></span>
								</div>
								<input type="password" name="hashpassword" className="form-control" placeholder="Password"  />
							</div>
							<div className="row align-items-center remember" />

							<div className="form-group">

							

									<input type="submit" value="Register" className="btn float-right login_btn" />


						  </div>
						</form>
					</div>
					<div className="card-footer">
						<div className="d-flex justify-content-center links">
							Already a member?<a href="#">Sign in</a>
						</div>
						
					</div>
				</div>
			</div>
		</div></>
    )
}
export default Signup;
