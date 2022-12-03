const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = (user) => {
  const token = jwt.sign({ data: { user } }, secret, jwtConfig);

  return token;
};

const validateUserToken = (authorization, userId) => {
  const { data } = jwt.decode(authorization);

  const { id } = data.user[0];

  if (id !== userId) return 'Unauthorized user';

  return 'Authorized user';
};

module.exports = { generateToken, validateUserToken };
