import React from 'react'
import httpClient from '../../httpClient';

class LeakDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: props.name, 
      model: props.model, 
      description: props.description,
      release_date: props.release_date, 
      retail_date: props.retail_date,
      imageUrl: props.imageUrl
    }
  }

  render() {
    const { name, model, description, imageUrl } = this.state;
    const release_date = this.state.release_date.split("T")[0].split("-")[1] + "/" + this.state.release_date.split("T")[0].split("-")[2];
    const retail_date = this.state.retail_date.split("T")[0].split("-")[1] + "/" + this.state.retail_date.split("T")[0].split("-")[2];
    return (
      <div className="col-lg-8 offset-md-2">
        <div className="single-leaks">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="img-shoes">
                <img src={imageUrl} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-7 py-2">
              <div className="leaks-text">
                <h5>{name}</h5>
                <h1>{model}</h1>
                <p>{description}</p>
                <div className="Release-Retail">
                  <span className="mr-4">Release Date: <b> {release_date} </b></span>
                  <span>Retail:<b> {retail_date} </b></span>
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