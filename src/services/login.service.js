const models = require('../models');

const getUserByLogin = async (email, password) => {
  const user = await models.User.findAll({
    where: { email, password },
    attributes: { exclude: ['password'] },
  });

  return user;
};

const validateLogin = async (email, password) => {
  const result = await models.User.findAll();

  const validateEmail = result.find((user) => user.email === email);
  const validatePassword = result.find((user) => user.password === password);

  if (!validateEmail || !validatePassword) return 'Invalid fields';

  const user = await getUserByLogin(email, password);

  return user;
};

module.exports = { validateLogin };
