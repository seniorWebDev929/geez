import React from 'react'
import httpClient from '../httpClient'

class LogIn extends React.Component {
	state = {
		fields: { email: '', password: ''}
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		evt.preventDefault()
		httpClient.logIn(this.state.fields).then(user => {
			this.setState({ fields: { email: '', password: '' } })
			if(user) {
				this.props.onLoginSuccess(user)
				this.props.history.push('/')
			}
		})
	}
	
	render() {
		const { email, password } = this.state.fields
		return (
			// <div className='LogIn'>
			// 	<div className='row'>
			// 		<div className='column column-33 column-offset-33'>
			// 			<h1>Log In</h1>
			// 			<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
			// 				<input type="text" placeholder="Email" name="email" value={email} />
			// 				<input type="password" placeholder="Password" name="password" value={password} />
			// 				<button>Log In</button>
			// 			</form>
			// 		</div>
			// 	</div>
			// </div>
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

export default LogIn