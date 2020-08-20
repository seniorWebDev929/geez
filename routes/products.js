const express = require('express');
const productsRouter = new express.Router();
const productsCtrl = require('../controllers/products');
const multer = require('multer');

console.log(`${__dirname}`);
const DIR = `client/public/assest/images`;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, Date.now() + '-' + fileName)
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});

productsRouter.route('/get3products').get(productsCtrl.get3products);
productsRouter.route('/addProducts').post(upload.single('product_image'), productsCtrl.create);
productsRouter.route('/getAllProducts').get(productsCtrl.getAllProducts);
productsRouter.route('/getNearestProduct').get(productsCtrl.getNearestProduct);
productsRouter.route('/getNewReleasedProducts').get(productsCtrl.getNewReleasedProducts);
productsRouter.route('/getNotReleasedProducts').get(productsCtrl.getNotReleasedProducts);

module.exports = productsRouter;