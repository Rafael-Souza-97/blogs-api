const userService = require('../services/user.service');
const { generateToken } = require('../auth/generateToken');
const { HTTP_STATUS_CREATED } = require('../utils/requisitionStatus');
const { HTTP_CONFLICT } = require('../utils/requisitionsErrors');

const userController = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const userResult = await userService.validateUser(displayName, email, password, image);

  if (!userResult) {
    return res.status(HTTP_CONFLICT).json({ message: 'User already registered' });
  }

  const token = generateToken(email);

  return res.status(HTTP_STATUS_CREATED).json({ token });
};

module.exports = { userController };
