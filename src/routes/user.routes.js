const express = require('express');
const { userController } = require('../controllers/user.controller');
const { userValidation } = require('../middlewares/userValidation.middleware');

const userRouter = express.Router();

userRouter.post('/', userValidation, userController);

module.exports = userRouter;
