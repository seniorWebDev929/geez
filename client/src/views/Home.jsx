import React from 'react'

const Home = (props) => {
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
                            <a href="/signup">Signup</a>
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
						<div className="col-md-4">
							<div className="single-item">
								<div className="item-img text-center">
									<img className="img-fluid" src="/assest/images/G2.png" alt="" />
								</div>
								<div className="items-details text-center">
									<span>Yeezy 700</span>
									<h3>MNVN</h3>
									<span className="line"></span>
								</div>
								<div className="item-price">
									<div className="row text-center mt-5">
										<div className="col-sm-6 ">
											<div className="Retail">
												<h5>Retail</h5>
												<button>$220</button>
											</div>
										</div>
										<div className="col-sm-6 mt-3 mt-sm-0">
											<div className="Retail">
												<h5>Resell</h5>
												<button>$300</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="single-item">
								<div className="item-img text-center">
									<img className="img-fluid" src="/assest/images/G2.png" alt="" />
								</div>
								<div className="items-details text-center">
									<span>Yeezy 700</span>
									<h3>MNVN</h3>
									<span className="line"></span>
								</div>
								<div className="item-price">
									<div className="row text-center mt-5">
										<div className="col-sm-6 ">
											<div className="Retail">
												<h5>Retail</h5>
												<button>$220</button>
											</div>
										</div>
										<div className="col-sm-6 mt-3 mt-sm-0">
											<div className="Retail">
												<h5>Resell</h5>
												<button>$300</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="single-item">
								<div className="item-img text-center">
									<img className="img-fluid" src="/assest/images/G2.png" alt="" />
								</div>
									<div className="items-details text-center">
										<span>Yeezy 700</span>
										<h3>MNVN</h3>
										<span className="line"></span>
									</div>
									<div className="item-price">
										<div className="row text-center mt-5">
											<div className="col-sm-6 ">
												<div className="Retail">
													<h5>Retail</h5>
													<button>$220</button>
												</div>
											</div>
											<div className="col-sm-6 mt-3 mt-sm-0">
												<div className="Retail">
													<h5>Resell</h5>
													<button>$300</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

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
				<footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-logoText">
                            <img src="/assest/images/footer-logo.png" className="img-fluid" alt=""/>
                            <p>Latest Sneaker & Streetwear News</p>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>


                    </div>
                    <div className="col-md-3">
                        <div className="important mt-3">
                            <h3>Important Links</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#">Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 text-md-right">
                        <div className="mail-sub mt-3">
                            <h3>Enter Email For Updates</h3>
                            <input type="email" placeholder="Enter Your Email"/><br/>
                            <button>subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
        <img src="/assest/images/shape.png" className="shape2" alt=""/>
        <img src="/assest/images/shape.png" className="shape3" alt=""/>
        <img src="/assest/images/shape.png" className="shape4" alt=""/>
        <img src="/assest/images/shape.png" className="shape5" alt=""/>
				</div>
		</React.Fragment>
	)
}

export default Home