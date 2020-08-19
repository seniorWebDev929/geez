import React from 'react';
import { Link } from 'react-router-dom'

class Admin extends React.Component {
  
  render() {
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
                  <th>Retail Price</th>
                  <th>Resell Price</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>Administration</td>
                  <td>(171) 555-2222</td>
                </tr>
                <tr>
                  <td>Peter Parker</td>
                  <td>Customer Service</td>
                  <td>(313) 555-5735</td>
                </tr>
                <tr>
                  <td>Fran Wilson</td>
                  <td>Human Resources</td>
                  <td>(503) 555-9931</td>
                </tr>      
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Admin;