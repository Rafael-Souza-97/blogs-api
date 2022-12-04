const jwt = require('jsonwebtoken');

const validateUserToken = (authorization, userId) => {
  const { data } = jwt.decode(authorization);

  const { id } = data.user[0];

  if (id !== userId) return 'Unauthorized user';

  return 'Authorized user';
};

const getUserIdByToken = (authorization) => {
  const { data } = jwt.decode(authorization);

  const { id } = data.user[0];

  return id;
};

module.exports = { validateUserToken, getUserIdByToken };
