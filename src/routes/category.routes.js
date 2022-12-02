const express = require('express');
const { getAllCategories, addNewCategory } = require('../controllers/categoriy.controller');
const { categoryValidation } = require('../middlewares/categoryValidation.middleware');
const { tokenValidation } = require('../middlewares/tokenValidation.middleware');

const categoryRouter = express.Router();

categoryRouter.get('/', tokenValidation, getAllCategories);

categoryRouter.post('/', tokenValidation, categoryValidation, addNewCategory);

module.exports = categoryRouter;
