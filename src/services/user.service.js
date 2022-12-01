const models = require('../models');

const validateUser = async (displayName, email, password, image) => {
  const result = await models.User.findOne({ where: { email } });

  if (result) return false;
  
  await models.User.create({ displayName, email, password, image });

  return true;
};

module.exports = { validateUser };
