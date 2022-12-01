const express = require('express');
const { loginController } = require('../controllers/login.controller');
const { loginValidation } = require('../middlewares/loginValidation.middleware');

const loginRouter = express.Router();

loginRouter.post('/', loginValidation, loginController);

module.exports = loginRouter;
