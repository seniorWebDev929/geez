import React from 'react'
import httpClient from '../httpClient'

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
	state = {
		fields: { name: '', email: '', password: ''}
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
		httpClient.signUp(this.state.fields).then(user => {
			console.log(user);
			this.setState({ fields: { name: '', email: '', password: '' } })
			if(user) {
				this.props.onSignUpSuccess(user)
				this.props.history.push('/')
			}
		})
	}
	
	render() {
		const { name, email, password } = this.state.fields
		return (
			// <div className='SignUp'>
			// 	<div className='row'>
			// 		<div className='column column-33 column-offset-33'>
			// 			<h1>Sign Up</h1>
			// 			<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
			// 				<input type="text" placeholder="Name" name="name" value={name} onChange={this.onInputChange.bind(this)}/>
			// 				<input type="text" placeholder="Email" name="email" value={email} onChange={this.onInputChange.bind(this)}/>
			// 				<input type="password" placeholder="Password" name="password" value={password} onChange={this.onInputChange.bind(this)}/>
			// 				<button onSubmit={this.onFormSubmit.bind(this)}>Sign Up</button>
			// 			</form>
			// 		</div>
			// 	</div>
			// </div>
			<div class="container">
				<div class="user-form text-center signUp-form">
					<img src="/assest/images/logo.png" class="img-fluid" alt="" />
					<p>Hey! Register Here.</p>
					<div class="form-inputs">
						<input type="text" name="" placeholder="Full Name" id="" />
						<input type="text" name="" placeholder="user name or email" id="" />
						<input type="text" name="" placeholder="password" id="" class="mb-2" />
						<div class="pass-power text-left">
							Password Strength: <span>Strong</span>
						</div>
					</div>
					<div class="terms">
						<label class="termss">I Agree To Terms & Conditions
							<input type="checkbox"/>
							<span class="checkmark"></span>
						</label>
					</div>
					<button>Register</button>
					<div class="account-sub">
						Already Have An Account? <a href="/login">Login</a>
					</div>
				</div>
				<img src="/assest/images/shape.png" className="shape7" alt=""/>
			</div>
		)
	}
}

export default SignUp