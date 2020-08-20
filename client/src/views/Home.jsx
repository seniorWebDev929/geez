import React from 'react';
import Release from './components/Release';
import Footer from './components/Footer';
import httpClient from '../httpClient';
import ReleasePreview from './components/ReleasePreview';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isLoggedIn: props.currentUser, products: [] };
	}
	componentDidMount() {
		httpClient.get3products().then(productData => {
				this.setState({products: productData})
			})
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		const products = this.state.products;
		// let signupBtn;
		// if (!isLoggedIn) {
		// 	signupBtn = <a href="/signup">Signup</a>;
		// }
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
										<a href="https://discord.gg/VdhYpT">Join Our Premium Group</a>
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
							<ReleasePreview />
						</div>
					</div>
					<div className="Releases">
						<div className="container">
							<div className="Featured-head">
								<h1>New Releases</h1>
								<p>These Are A Few Of The Release We've Added</p>
							</div>
							<div className="row mt-5">
								{products.map( item => 
									<Release key={item._id} name={item.name} model={item.model} retail_price={item.retail_price} resell_price={item.resell_price} imageUrl={item.image}/>
								)}
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