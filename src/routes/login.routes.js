const express = require('express');
const productsController = require('../controllers/product.controller');
const { productNameValidation } = require('../middlewares/validateProducts.middleware');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getProducts);

module.exports = productsRouter;
