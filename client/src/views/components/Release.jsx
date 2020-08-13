import React from 'react'

class Release extends React.Component {
  render() {
    return (
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
    )
  }
}

export default Release;