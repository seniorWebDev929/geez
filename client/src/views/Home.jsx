import React from 'react';
import Release from './components/Release';
import Footer from './components/Footer';
import httpClient from '../httpClient';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isLoggedIn: props.currentUser };
	}
	componentDidMount() {
		console.log("component didmont is called")
		httpClient.get3products().then(productData => {
				console.log(productData)
			})
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let signupBtn;
		if (!isLoggedIn) {
			signupBtn = <a href="/signup">Signup</a>;
		}
		return (
			<React.Fragment>
				<div className="mainPage">
					<div className="homePage">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6">
									<div className="mainText">
										<h1>GEEZ</h1>
										<p>Latest Sneaker & Streetwear News</p>
										{signupBtn}
									</div>
								</div>
								<div className="col-lg-6">
									<div className="homeImg text-center">
										<img className="HomeImg" src="/assest/images/main.png" alt="" />
									</div>
								</div>
							</div>
						</div>

					</div>
					<div className="Featured">
						<div className="container">
							<div className="Featured-head">
								<h1>Featured Release</h1>
								<p>We've Hand-Picked The Best Release Of The Month.</p>
							</div>
							<div className="row mt-5">
								<div className="col-12 cont-featured">
									<div className="MNVN text-center">
										<div className="MNVN-Text">
											<span className="Yeezy">Yeezy 700</span>
											<h1>MNVN</h1>
											<span className="Releasing">Releasing 7.20</span>
										</div>
										<div className="hover-section">
											<a href="/newreleases"> <i className="fas fa-plus mr-2"></i> show more</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="Releases">
						<div className="container">
							<div className="Featured-head">
								<h1>New Releases</h1>
								<p>These Are A Few Of The Release We've Added</p>
							</div>
							<div className="row mt-5">
								<Release />
								<Release />
								<Release />
							</div>
							<div className="show-more text-center">
								<a href="/newreleases"> <i className="fas fa-plus mr-2"></i> show more</a>
							</div>
						</div>
					</div>
					<div className="instagram text-center">
						<div className="container">
							<h1>Follow Us On Instagram</h1>
							<p>Stay Up to Date With Our Posts</p>
							<a href="#"><i className="fab fa-instagram"></i></a>
						</div>
					</div>
					<Footer />

					<img src="/assest/images/shape.png" className="shape2" alt="" />
					<img src="/assest/images/shape.png" className="shape3" alt="" />
					<img src="/assest/images/shape.png" className="shape4" alt="" />
					<img src="/assest/images/shape.png" className="shape5" alt="" />
				</div>
			</React.Fragment>
		)
	}

}

export default Home