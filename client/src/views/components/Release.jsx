import React from 'react'

class Release extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: props.name, 
      model: props.model, 
      retail_price: props.retail_price, 
      resell_price: props.resell_price,
      imageUrl: props.imageUrl
    }
  }
  render() {
    const { name, model, retail_price, resell_price, imageUrl } = this.state;
    return (
      <div className="col-md-4">
        <div className="single-item">
          <div className="item-img text-center">
            <img className="img-fluid release_image" src={imageUrl} alt="" />
          </div>
          <div className="items-details text-center">
            <span>{name}</span>
            <h3>{model}</h3>
            <span className="line"></span>
          </div>
          <div className="item-price">
            <div className="row text-center mt-5">
              <div className="col-sm-6 ">
                <div className="Retail">
                  <h5>Retail</h5>
                    <button>${retail_price}</button>
                </div>
              </div>
              <div className="col-sm-6 mt-3 mt-sm-0">
                <div className="Retail">
                  <h5>Resell</h5>
                  <button>${resell_price}</button>
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