import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class AddNewData extends React.Component {
  state = {
    name: "",
    model: "",
    description: "",
    release_date: new Date(),
    retail_date: new Date(),
    retail_price: 0,
    resell_price: 0,
    product_image: "https://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/"
  }

  releaseDateChange = date => {
    this.setState({
      release_date: date
    });
  };

  retailDateChange = date => {
    this.setState({
      retail_date: date
    });
  };

  uploadImageHandler = e => {
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2) {
        this.setState({product_image: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  onChangeHandler = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
		})
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return(
      <div className="container">
				<div className="user-form text-center signUp-form" id="add_new_product_form">
					<img src="/assest/images/logo.png" className="img-fluid" alt="" />
					<p>Add New Product</p>
					{/* <p className="text-danger" style={{display:this.state.warningMessage.display}}>{this.state.warningMessage.value}</p> */}
					<div className="form-inputs">
						<input type="text" name="name" placeholder="Product Name" id=""  onChange={this.onChangeHandler}/>
						<input type="text" name="model" placeholder="Product Model" id=""  onChange={this.onChangeHandler}/>
						<textarea name="description" placeholder="Descripttion" onChange={this.onChangeHandler}/>
            <DatePicker selected={this.state.release_date} onChange={this.releaseDateChange} />
						<DatePicker selected={this.state.retail_date} onChange={this.retailDateChange} />
            <input type="number" name="retail_price" placeholder="Retail Price($)" onChange={this.onChangeHandler}/>
            <input type="number" name="resell_price" placeholder="Resell Price($)" onChange={this.onChangeHandler}/>
            
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="customFile" onChange={this.uploadImageHandler} />
              <label className="custom-file-label" htmlFor="customFile">Choose file</label>
            </div>
            <img src={this.state.product_image} alt="" className="product_image_preview" />
            
					</div>
					
					<button className="register" onClick={this.onSubmit}>Add</button>
					
				</div>
      </div>
    )
  }
}

export default AddNewData;