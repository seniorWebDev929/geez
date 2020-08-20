import React from 'react';
import { Link } from 'react-router-dom';
import httpClient from '../httpClient';

class Admin extends React.Component {
  state = {
    products: []
  }
  componentDidMount() {
    httpClient.getAllProducts().then((productData) => {
      this.setState({ products: productData });
    })
  }
  render() {
    const products = this.state.products;
    return(
      <div className="container-lg">
        <div className="table">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row title-row"  >
                <Link to="/admin/add">
                  <button type="button" className="btn btn-info add-new" ><i className="fa fa-plus"></i> Add New</button>
                </Link>
                
              </div>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Model</th>
                  <th>Description</th>
                  <th>Release Date</th>
                  <th>Retail Date</th>
                  <th>Retail Price($)</th>
                  <th>Resell Price($)</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {products.map( item =>
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.model}</td>
                    <td>{item.description}</td>
                    <td>{item.release_date}</td>
                    <td>{item.retail_date}</td>
                    <td>{item.retail_price}</td>
                    <td>{item.resell_price}</td>
                    <td>
                      <img className="admin_shoes" src={item.image} alt="" />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Admin;