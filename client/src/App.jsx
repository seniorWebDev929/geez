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
import GuideFormat from './views/GuideFormat'
import Admin from './views/Admin'
import AddNewData from './views/components/AddNewData'

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
		console.log(currentUser);
		return (
			<section className="mainPage">
			<Router>
				{/* {currentUser.usertype ? <NavBar currentUser={currentUser} /> : <Admin /> } */}
				
				<NavBar currentUser={currentUser} />
				<Switch>
					
					<Route exact path="/" component={() => <Home currentUser={currentUser}/>} />
				
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

					<Route path="/newreleases" render={() => {
						return currentUser
							? <NewReleases />
							: <Redirect to="/login" />
					}} />
					
					<Route path="/calendar" render={() => {
						return currentUser
							? <Calendar />
							: <Redirect to="/login" />
					}} />

					<Route path="/leaks" render={() => {
						return currentUser
							? <Leaks />
							: <Redirect to="/login" />
					}} />

					<Route path="/guideformat" component={GuideFormat} />

					<Route exact path="/admin" render={() => {
						return currentUser.usertype
							? <Home />
							: <Admin/> 
					}} />

					<Route path="/admin/add" component={AddNewData} />

				</Switch>
				
				</Router>
			</section>
		)
	}
}

export default App