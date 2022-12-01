const { HTTP_BAD_REQUEST } = require('../utils/requisitionsErrors');

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) { 
    return res.status(HTTP_BAD_REQUEST).json({ 
      message: 'Some required fields are missing',
    });
  }

  return next();
};

module.exports = { loginValidation };
