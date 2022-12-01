const jwt = require('jsonwebtoken');
const loginService = require('../services/login.service');
const { HTTP_STATUS_OK } = require('../utils/requisitionStatus');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const loginResult = await loginService.validateLogin(email, password);

  if (loginResult === 'Invalid fields') {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { email } }, secret, jwtConfig);

  return res.status(HTTP_STATUS_OK).json({ token });
};

module.exports = { loginController };
