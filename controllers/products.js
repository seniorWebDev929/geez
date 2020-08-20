const Product = require('../models/Product');
const { Mongoose } = require('mongoose');


module.exports = {
  //get3products for homepage(get all list temporaly)
  get3products: (req, res) => {
    const now = new Date();
    Product.find({
      release_date: {
        $lte: now
      }
    })
    .sort({ release_date: -1})
    .limit(3)
    .then( products => {
      res.json(products);
    })
    .catch( err => console.error(err))
  },

  getNearestProduct: (req, res) => {
    const now = new Date();
    Product.find({
      release_date: {
        $gte: now
      }
    })
    .sort({release_date: 1})
    .limit(1)
    .then( product => {
      res.json(product);
    })
    .catch( err => console.error(err))
  },

  getNewReleasedProducts: (req, res) => {
    const now = new Date();
    Product.find({
      release_date: {
        $lte: now
      }
    })
    .sort({ release_date: -1 })
    .then( products => {
      res.json(products);
    })
    .catch( err => console.error(err))
  },

  getNotReleasedProducts: (req, res) => {
    const now = new Date();
    Product.find({
      release_date: {
        $gte: now
      }
    })
    .sort({ release_date: 1 })
    .then( products => {
      res.json(products);
    })
    .catch( err => console.error(err))
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