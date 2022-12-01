const models = require('../models');

const validateLogin = async (email, password) => {
  const result = await models.User.findAll();

  const validateEmail = result.find((user) => user.email === email);
  const validatePassword = result.find((user) => user.password === password);

  if (!validateEmail || !validatePassword) return 'Invalid fields';

  return true;
};

module.exports = { validateLogin };
