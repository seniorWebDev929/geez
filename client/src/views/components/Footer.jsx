import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-logoText">
                <img src="/assest/images/footer-logo.png" className="img-fluid" alt="" />
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
                <input type="email" placeholder="Enter Your Email" /><br />
                <button>subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer