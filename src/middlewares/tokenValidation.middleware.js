const jwt = require('jsonwebtoken');
const { HTTP_UNAUTHORIZED } = require('../utils/requisitionsErrors');

const secret = process.env.JWT_SECRET || 'secretToken';

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const tokenValidation = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    
    if (!token) {
      return res.status(HTTP_UNAUTHORIZED).json({ message: 'Token not found' });
    }

    const verifyToken = jwt.verify(token, secret, jwtConfig);
    
    if (verifyToken) {
      return next();
    }
  } catch (error) {
    return res.status(HTTP_UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  tokenValidation,
};