import React from 'react';
import httpClient from '../../httpClient';

class ReleasePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      model: "",
      release_date: ""
    }
  }
  componentDidMount() {
    httpClient.getNearestProduct().then(productData => {
      this.setState({
        name: productData[0].name,
        model: productData[0].model,
        release_date: productData[0].release_date 
      })
    })
  }

  render() {
    const { name, model } = this.state;
    const release_date = this.state.release_date.split("T")[0].split("-")[1] + "/" + this.state.release_date.split("T")[0].split("-")[2];
    
    return(
      <div className="row mt-5">
        <div className="col-12 cont-featured">
          <div className="MNVN text-center">
            <div className="MNVN-Text">
              <span className="Yeezy">{name}</span>
              <h1>{model}</h1>
              <span className="Releasing">Releasing {release_date}</span>
            </div>
            <div className="hover-section">
              <a href="/leaks"> <i className="fas fa-plus mr-2"></i> show more</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ReleasePreview;