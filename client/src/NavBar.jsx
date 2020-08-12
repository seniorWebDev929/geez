import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
	return (
		// <div className='NavBar'>
		// 	<Link to="/">Home</Link>
		// 	{props.currentUser
		// 		? (
		// 			<span>
		// 				<Link to="/vip">VIP</Link>
		// 				<Link to="/logout">Log Out</Link>
		// 			</span>
		// 		)
		// 		: (
		// 			<span>
		// 				<Link to="/login">Log In</Link>
		// 				<Link to="/signup">Sign Up</Link>
		// 			</span>
		// 		)
		// 	}
		// </div>
		<nav className="navbar navbar-expand-lg main ">
			<div className="container">
				<a className="navbar-brand" href="/"><img src="/assest/images/logo.png" alt="" /></a>
				<button className="navbar-toggler fas fa-bars  text-right" type="button" data-toggle="collapse"
						data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
						aria-expanded="false" aria-label="Toggle navigation">
				</button>

				<div className="collapse navbar-collapse " id="navbarSupportedContent">
						<ul className="navbar-nav main ml-auto">
								<li className="nav-item">
										<a className="nav-link" href="/">home</a>
								</li>
								<li className="nav-item">
										<a className="nav-link" href="/newreleases" data-scroll="serv">New Releases</a>
								</li>

								<li className="nav-item">
										<a className="nav-link" href="/calendar" data-scroll="vision">Calendar</a>
								</li>
								<li className="nav-item">
										<a className="nav-link" href="/leaks" data-scroll="work">Leaks</a>
								</li>

								<li className="nav-item">
										<a className="nav-link order-price" href="/login" data-scroll="contact">login</a>
								</li>

						</ul>

				</div>
			</div>
			<img src="/assest/images/shape.png" className="shape1" alt=""/>
		</nav>
	)
}

export default NavBar