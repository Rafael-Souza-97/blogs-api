const userService = require('../services/user.service');
const { generateToken } = require('../auth/generateToken');
const { getUserIdByToken } = require('../auth/validateUserToken');
const {
  HTTP_STATUS_CREATED,
  HTTP_STATUS_OK,
  HTTP_STATUS_NO_CONTENT,
} = require('../utils/requisitionStatus');
const {
  HTTP_CONFLICT,
  HTTP_SERVIDOR_ERROR,
  HTTP_NOT_FOUND,
} = require('../utils/requisitionsErrors');

const getAllUsers = async (_req, res) => {
  const usersResult = await userService.getAllUsers();

  if (!usersResult) {
    return res.status(HTTP_SERVIDOR_ERROR).json({ message: 'Something went wrong' });
  }

  return res.status(HTTP_STATUS_OK).json(usersResult);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const userResult = await userService.getUserById(id);

  if (!userResult) {
    return res.status(HTTP_NOT_FOUND).json({ message: 'User does not exist' });
  }

  return res.status(HTTP_STATUS_OK).json(userResult);
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

const deleteUser = async (req, res) => {
  try {
    const { authorization } = req.headers;
    
    const userId = await getUserIdByToken(authorization);

    await userService.deleteUser(userId);
  
    return res.status(HTTP_STATUS_NO_CONTENT).end();
  } catch (error) {
    console.log(error);

    return res.status(HTTP_NOT_FOUND).json({ message: 'User does not exist' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  addNewUser,
  deleteUser,
};
