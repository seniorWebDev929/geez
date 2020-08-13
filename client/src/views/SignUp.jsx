import React from 'react'
import * as EmailValidator from 'email-validator';
import passwordStrength from 'check-password-strength';
import httpClient from '../httpClient'

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
	state = {
		fields: { name: '', email: '', password: ''},
		warningMessage: {value:'', display: false},
		pswStr: '',
		privacyAgreed: false
	}

	onInputChange(evt) {
		if(evt.target.name == "password" && !evt.target.value==""){
			this.setState({
				pswStr: passwordStrength(evt.target.value).value
			})
		}
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onCheckboxClick(evt) {
		this.setState({
			privacyAgreed: evt.target.checked
		})
	}

	onFormSubmit(evt) {
		const isValdated = EmailValidator.validate(this.state.fields.email)
		evt.preventDefault()
		if(this.state.fields.name == "" || this.state.fields.password == ""){
			this.setState({
				...this.state,
				warningMessage: {value: 'Name or Password cannot be empty', display: true}
			})
		}else if(!isValdated){
			this.setState({
				warningMessage: {value: 'Email is not validated', display: true}
			})
		}else if(!this.state.privacyAgreed){
			this.setState({
				warningMessage: {value: 'You should agree our terms and privacy', display: true}
			})
		}else{
			httpClient.signUp(this.state.fields).then(user => {
				this.setState({ fields: { name: '', email: '', password: '' }, warningMessage: { value:'', display: false} })
				if(user) {
					this.props.onSignUpSuccess(user)
					this.props.history.push('/')
				} else{
					this.setState({
						warningMessage: {value: 'Email is already exist', display: true}
					})
				}
			})
		}
		
	}
	
	render() {
		const { name, email, password } = this.state.fields
		const pswStr = this.state.pswStr
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
			<div className="container">
				<div className="user-form text-center signUp-form">
					<img src="/assest/images/logo.png" className="img-fluid" alt="" />
					<p>Hey! Register Here.</p>
					<p className="text-danger" style={{display:this.state.warningMessage.display}}>{this.state.warningMessage.value}</p>
					<div className="form-inputs">
						<input type="text" name="name" placeholder="Full Name" id="" value={name} onChange={this.onInputChange.bind(this)} />
						<input type="text" name="email" placeholder="email" id="" value={email} onChange={this.onInputChange.bind(this)}/>
						<input type="password" name="password" placeholder="password" id="" className="mb-2" value={password} onChange={this.onInputChange.bind(this)}/>
						<div className="pass-power text-left">
							Password Strength: <span>{pswStr}</span>
						</div>
					</div>
					<div className="terms">
						<label className="termss">I Agree To Terms & Conditions
							<input type="checkbox" onClick={this.onCheckboxClick.bind(this)}/>
							<span className="checkmark"></span>
						</label>
					</div>
					<button className="register" onClick={this.onFormSubmit.bind(this)}>Register</button>
					<div className="account-sub">
						Already Have An Account? <a href="/login">Login</a>
					</div>
				</div>
				<img src="/assest/images/shape.png" className="shape7" alt=""/>
			</div>
		)
	}
}

export default SignUp