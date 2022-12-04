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

module.exports = { generateToken };
