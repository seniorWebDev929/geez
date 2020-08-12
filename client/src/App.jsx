import React from 'react'
import { Switch, Route, Redirect, BrowserRouter as Router, } from 'react-router-dom'
import httpClient from './httpClient'

import NavBar from './NavBar'
import LogIn from './views/LogIn'
import LogOut from './views/LogOut'
import SignUp from './views/SignUp'
import VIP from './views/VIP'
import Home from './views/Home'
import NewReleases from './views/NewReleases'
import Calendar from './views/Calendar'
import Leaks from './views/Leaks'

class App extends React.Component {
	state = { currentUser: httpClient.getCurrentUser() }

	onLoginSuccess(user) {
		this.setState({ currentUser: httpClient.getCurrentUser() })
	}

	logOut() {
		httpClient.logOut()
		this.setState({ currentUser: null })
	}
	
	render() {
		const { currentUser } = this.state
		return (
			<div>
<Router>
				<NavBar currentUser={currentUser} />

				<Switch>
					
				<Route exact path="/" component={Home} />
				<Route path="/newreleases" component={NewReleases} />
					<Route path="/login" render={(props) => {
						return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
					}} />

					<Route path="/logout" render={(props) => {
						return <LogOut onLogOut={this.logOut.bind(this)} />
					}} />

					{/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
					<Route path="/signup" render={(props) => {
						return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
					}} />

					<Route path="/vip" render={() => {
						return currentUser
							? <VIP />
							: <Redirect to="/login" />
					}} />


					
					

					<Route path="/calendar" component={Calendar} />

					<Route path="/leaks" component={Leaks} />

				</Switch>
				{/* <img src="/assest/images/shape.png" className="shape1" alt=""/>
        <img src="/assest/images/shape.png" className="shape2" alt=""/>
        <img src="/assest/images/shape.png" className="shape3" alt=""/>
        <img src="/assest/images/shape.png" className="shape4" alt=""/>
        <img src="/assest/images/shape.png" className="shape5" alt=""/> */}
				</Router>
			</div>
		)
	}
}

export default App