import React from 'react'
import httpClient from '../httpClient'

class Leaks extends React.Component {
	
	render() {
		
		return (
			<div className="container">
				<div className="user-form text-center">
					<img src="./assest/images/logo.png" className="img-fluid" alt="" />
					<p>Welcome back! Please login to continue.</p>
					<div className="form-inputs">
						<input type="text" name="" placeholder="user name or email" id="" />
						<input type="text" name="" placeholder="password" id="" className="mb-2" />
						<div className="pass-power text-left">
							Password Strength: <span>Strong</span>
						</div>
					</div>
					<div className="terms d-flex">
						<label className="termss">Remember Me
							<input type="checkbox" />
							<span className="checkmark"></span>
						</label>
						<a href="#">forget passowrd</a>

					</div>
					<button className="login">Login</button>
					<div className="account-sub">
						New to Geez? <a href="/signup">Sign Up</a>
					</div>
				</div>


			</div>
		)
	}
}

export default Leaks