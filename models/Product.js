const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  model: { type: String },
  description: { type: String },
  retail_date: { type: Date },
  retail_price: { type: Number },
  release_date: { type: Date },
  resell_price: { type: Number },
  image: { type: String }
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;