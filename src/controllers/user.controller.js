const userService = require('../services/user.service');
const { generateToken } = require('../auth/generateToken');
const { HTTP_STATUS_CREATED, HTTP_STATUS_OK } = require('../utils/requisitionStatus');
const { HTTP_CONFLICT, HTTP_SERVIDOR_ERROR } = require('../utils/requisitionsErrors');

const getAllUsers = async (_req, res) => {
  const usersResult = await userService.getAllUsers();

  if (!usersResult) {
    return res.status(HTTP_SERVIDOR_ERROR).json({ message: 'Something went wrong' });
  }

  return res.status(HTTP_STATUS_OK).json(usersResult);
};

const addNewUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const newUserResult = await userService.addNewUser(displayName, email, password, image);

  if (!newUserResult) {
    return res.status(HTTP_CONFLICT).json({ message: 'User already registered' });
  }

  const token = generateToken(email);

  return res.status(HTTP_STATUS_CREATED).json({ token });
};

module.exports = {
  addNewUser,
  getAllUsers,
};
