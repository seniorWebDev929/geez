import React from 'react'
// import ReleaseDetail from './components/ReleaseDetail'
import Release from './components/Release'
import httpClient from '../httpClient';

class NewReleases extends React.Component {
  constructor(props) {
		super(props);
		this.state = { products: [] };
  }
  
  componentDidMount() {
    httpClient.getNewReleasedProducts().then(productData => {
      this.setState({products: productData})
    })
  }
  render() {
    const products = this.state.products;
    return(
    <div className="Releases">
      <div className="container">
        <div className="Featured-head text-center single-page">
          <h1>New Releases</h1>
          <p>Info on All New Releases</p>
        </div>
        <div className="row mt-5">
          {products.map( item => 
            <Release key={item._id} name={item.name} model={item.model} retail_price={item.retail_price} resell_price={item.resell_price} imageUrl={item.image}/>
          )}

        </div>

      </div>
      <img src="/assest/images/shape.png" className="shape2" alt=""/>
      <img src="/assest/images/shape.png" className="shape6" alt=""/>
    </div>
    )
  }
}

export default NewReleases