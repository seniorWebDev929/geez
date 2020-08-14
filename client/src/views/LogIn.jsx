import React from 'react'
import httpClient from '../httpClient'

class LogIn extends React.Component {
	state = {
		fields: { email: '', password: ''},
		warningMessage: { value: '', display: false }
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
			}else{
				this.setState({
					warningMessage: {value: 'Email or Password is not correct', display: true}
				})
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
					<p className="text-danger" style={{display:this.state.warningMessage.display}}>{this.state.warningMessage.value}</p>
					<div className="form-inputs">
						<input type="text" name="email" placeholder="email" id="" value={email} onChange={this.onInputChange.bind(this)}/>
						<input type="password" name="password" placeholder="password" id="" className="mb-2" value={password} onChange={this.onInputChange.bind(this)}/>
					</div>
					<div className="terms d-flex">
						<label className="termss">Remember Me
							<input type="checkbox" />
							<span className="checkmark"></span>
						</label>
						<a href="#">forget passowrd</a>

					</div>
					<button className="login" onClick={this.onFormSubmit.bind(this)}>Login</button>
					<div className="account-sub">
						New to Geez? <a href="/signup">Sign Up</a>
					</div>
				</div>

				<img src="/assest/images/shape.png" className="shape7" alt=""/>
			</div>
		)
	}
}

export default LogIn