const loginService = require('../services/login.service');
const { generateToken } = require('../auth/generateToken');
const { HTTP_STATUS_OK } = require('../utils/requisitionStatus');
const { HTTP_BAD_REQUEST } = require('../utils/requisitionsErrors');

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const loginResult = await loginService.validateLogin(email, password);

  if (loginResult === 'Invalid fields') {
    return res.status(HTTP_BAD_REQUEST).json({ message: 'Invalid fields' });
  }

  const token = generateToken(loginResult);

  return res.status(HTTP_STATUS_OK).json({ token });
};

module.exports = { loginController };
