const express = require('express');
const { addNewCategory } = require('../controllers/categoriy.controller');
const { categoryValidation } = require('../middlewares/categoryValidation.middleware');
const { tokenValidation } = require('../middlewares/tokenValidation.middleware');

const categoryRouter = express.Router();

categoryRouter.post('/', tokenValidation, categoryValidation, addNewCategory);

module.exports = categoryRouter;
