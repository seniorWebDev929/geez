const Product = require('../models/Product');
const { Mongoose } = require('mongoose');


module.exports = {
  //get3products for homepage(get all list temporaly)
  get3products: (req, res) => {
    console.log("called")
    Product.find({}, (err, products) => {
			res.json(products);
		});
  },

  create: (req, res, next) => {
    const url = req.protocol + '://' + req.get('host');
    const product = new Product({
      name: req.body.name,
      model: req.body.model,
      description: req.body.description,
      release_date: req.body.release_date,
      retail_date: req.body.retail_date,
      retail_price: req.body.retail_price,
      resell_price: req.body.resell_price,
      image: url + '/assest/images/' + req.file.filename
    });
    product.save().then(result => {
      res.status(201).json({
        message: "product registered successfully"
      })
    }).catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    })
  },

  getAllProducts: (req, res, next) => {
    Product.find({}, (err, products) => {
			res.json(products);
		});
  }
};