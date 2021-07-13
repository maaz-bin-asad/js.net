
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Auth.css';
import { login } from "../../feature/userSlice";


const Login = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const dispatch = useDispatch();

	
	const handelSubmit = (e) => {
		e.preventDefault();
		const pass = e.target.elements.hashpassword.value
		var xhr = new XMLHttpRequest();
		xhr.open("POST","User", true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify({
			"mail": email,
		
			"hashpassword": pass,
		}));
		console.log(name)
		dispatch(
			login({
			name: name,
			email: email,
			loggedIn: true,
		})
		);
	};


    return (
			 <>
			<div className="container1">
				<div className="d-flex justify-content-center h-100">
					<div className="card">
						<div className="card-header">
							<h3>Log In</h3>
							<div className="d-flex justify-content-end social_icon">
								<span><i className="fab fa-facebook-square"></i></span>
								<span><i className="fab fa-google-plus-square"></i></span>
								<span><i className="fab fa-twitter-square"></i></span>
							</div>
						</div>
						<div className="card-body">
							<form action="User" method="post" onSubmit={(e) => handelSubmit(e)}>
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text"><i className="fas fa-human"></i></span>
									</div>
									<input type="name" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
								</div>
									<div className="input-group form-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i class="fas fa-key"></i></span>
										</div>
										<input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
									</div>
								
								<div className="input-group form-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i class="fas fa-key"></i></span>
									</div>
									<input type="password" className="form-control" placeholder="Password" name="hashpassword"/>
								</div>
										<div className="row align-items-center remember"/>
											
									
											<div className="form-group">
												<input type="submit" value="Login" className="btn float-right login_btn"/>
									</div>
							</form>
										</div>
										<div className="card-footer">
											<div className="d-flex justify-content-center links">
												Don't have an account?<a href="#">Sign Up</a>
											</div>
											<div className="d-flex justify-content-center">
												<a href="#">Forgot your password?</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							
          
		  </>
    )

}
export default Login;


/*
import React, { Component } from 'react';
import './Auth.css'

export class Login extends Component {
    static displayName = Login.name;



    constructor(props) {
		super(props);
		this.state = { Register: 0, Invalid:0,  loading: true };
    }

    componentDidMount() {
        this.populateData();
    }

    static renderDiv(Register, Invalid) {
        return (<>
			<div className="container1">
				<div className="d-flex justify-content-center h-100">
					{Register == '1' ? < h1 > Welcome now login</h1> : ""}
					{Invalid == '1' ? < h1 > Invalid Email or Password</h1> : ""}
					<div className="card">
						<div className="card-header">
							<h3>Log In</h3>
							<div className="d-flex justify-content-end social_icon">
								<span><i className="fab fa-facebook-square"></i></span>
								<span><i className="fab fa-google-plus-square"></i></span>
								<span><i className="fab fa-twitter-square"></i></span>
							</div>
						</div>
						<div className="card-body">
							<form action="User" method="post">
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text"><i className="fas fa-envelope"></i></span>
									</div>
									<input type="text" className="form-control" placeholder="Email" name="mail" />

								</div>
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text"><i class="fas fa-key"></i></span>
									</div>
									<input type="password" className="form-control" placeholder="Password" name="hashpassword" />
								</div>
								<div className="row align-items-center remember" />


								<div className="form-group">
									<input type="submit" value="Login" className="btn float-right login_btn" />
								</div>
							</form>
						</div>
						<div className="card-footer">
							<div className="d-flex justify-content-center links">
								Don't have an account?<a href="#">Sign Up</a>
							</div>
							<div className="d-flex justify-content-center">
								<a href="#">Forgot your password?</a>
							</div>
						</div>
					</div>
				</div>
			</div>

        </>);
    }

    render() {

        let contents = this.state.loading
			? <p><em>Loading..</em></p>
			: Login.renderDiv(this.state.Register, this.state.Invalid);


        return (

            <div >

               
                {contents}


            </div>
        );
    }

    async populateData() {

		
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
		console.log(params)
		const register = params.registered
		const invalid = params.invalid

		this.setState({ Register: register, Invalid: invalid, loading: false });
    }
}*/