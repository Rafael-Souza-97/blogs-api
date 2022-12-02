const express = require('express');
const {
  getAllUsers,
  getUserById,
  addNewUser,
} = require('../controllers/user.controller');
const { userValidation } = require('../middlewares/userValidation.middleware');
const { tokenValidation } = require('../middlewares/tokenValidation.middleware');

const userRouter = express.Router();

userRouter.get('/', tokenValidation, getAllUsers);

userRouter.get('/:id', tokenValidation, getUserById);

userRouter.post('/', userValidation, addNewUser);

module.exports = userRouter;
