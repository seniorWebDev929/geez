const express = require('express');
const productsRouter = new express.Router();
const productsCtrl = require('../controllers/products');

productsRouter.route('/get3products').get(productsCtrl.get3products);

module.exports = productsRouter;