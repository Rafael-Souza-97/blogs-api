const { HTTP_BAD_REQUEST } = require('../utils/requisitionsErrors');

const displayNameValidation = (displayName) => {
  if (displayName.length < 8) return false;

  return true;
};

const emailValidation = (email) => {
  const regularExpression = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const validEmail = regularExpression.test(email);

  if (!validEmail) return false;

  return true;
};

const passwordValidation = (password) => {
  if (password.length < 6) return false;

  return true;
};

const userValidation = (req, res, next) => {
  const { displayName, email, password } = req.body;

  const validDisplayName = displayNameValidation(displayName);
  const validEmail = emailValidation(email);
  const validatePassword = passwordValidation(password);

  if (!validDisplayName) {
    return res.status(HTTP_BAD_REQUEST)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  if (!validEmail) {
    return res.status(HTTP_BAD_REQUEST)
      .json({ message: '"email" must be a valid email' });
  }

  if (!validatePassword) {
    return res.status(HTTP_BAD_REQUEST)
      .json({ message: '"password" length must be at least 6 characters long' });
  }

  return next();
};

module.exports = {
  userValidation,
};
