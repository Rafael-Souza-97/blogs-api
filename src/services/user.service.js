const { User } = require('../models');

const getAllUsers = async () => {
  const usersResult = await User.findAll();

  const getUsers = usersResult.map(({ dataValues }) => {
    const { password: _password, ...usersWithoutPassword } = dataValues;

    return usersWithoutPassword;
  });

  return getUsers;
};

const addNewUser = async (displayName, email, password, image) => {
  const result = await User.findOne({ where: { email } });

  if (result) return false;
  
  await User.create({ displayName, email, password, image });

  return true;
};

module.exports = {
  getAllUsers,
  addNewUser,
};
