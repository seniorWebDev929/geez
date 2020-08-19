import React from 'react'
import LeakDetail from './components/LeakDetail'
import httpClient from '../httpClient';

class Leaks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {products: []};
  }

  componentDidMount() {
    httpClient.getAllProducts().then(productData => {
      this.setState({products: productData})
    })
  }

  render() {
    const products = this.state.products
    return (
      <div className="Releases" >
        <div className="container">
          <div className="Featured-head text-center">
            <h1>Release Leaks</h1>
            <p className="calener-desc">Info On Leaks</p>
          </div>
          <div className="container">
            <div className="row">
              {products.map( item => 
                <LeakDetail key={item._id} name={item.name} model={item.model} description={item.description} release_date={item.release_date} retail_date={item.retail_date} imageUrl={item.image}/>
              )}
              {/* <LeakDetail />
              <LeakDetail /> */}
            </div>
          </div>
        </div>
        <img src="/assest/images/shape.png" className="shape2" alt=""/>
        <img src="/assest/images/shape.png" className="shape3" alt=""/>
      </div>
		)
	}
}

export default Leaks