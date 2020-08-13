import React from 'react'

class LeakDetail extends React.Component {
  render() {
    return (
      <div className="col-lg-8 offset-md-2">
        <div className="single-leaks">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="img-shoes">
                <img src="/assest/images/shoes.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-7 py-2">
              <div className="leaks-text">
                <h5>YEEZY 700</h5>
                <h1>MNVN</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                duo
                        </p>
                <div className="Release-Retail">
                  <span className="mr-4">Release Date: <b> 10/29 </b></span>
                  <span>Retail:<b> 10/29 </b></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LeakDetail