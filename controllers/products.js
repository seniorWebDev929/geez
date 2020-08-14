const Product = require('../models/Product');

module.exports = {
  //get3products for homepage(get all list temporaly)
  get3products: (req, res) => {
    console.log("called")
    Product.find({}, (err, products) => {
			res.json(products);
		});
  },
};